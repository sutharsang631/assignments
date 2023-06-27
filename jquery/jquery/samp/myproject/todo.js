$(document).ready(function () {
    if (localStorage.getItem('currentUser')) {
        showTodo()
    }
    else {
        showLogin()
    }
    $('#signupLink').click(function () {
        showSignup();
    });

    $('#loginLink').click(function () {
        showLogin();
    });

    function showLogin() {
        $('#login').show();
        $('#signup').hide();
        $('#todo').hide();
    }

    function showSignup() {
        $('#login').hide();
        $('#signup').show();
        $('#todo').hide();
    }
    function showTodo() {
        var currentUser = localStorage.getItem('currentUser');
        $('#currentUser').text(currentUser);
        $('#login').hide();
        $('#signup').hide();
        $('#todo').show();
    }
    $("#signupButton").click(function () {
        var username = $("#signupUsername").val()
        var password = $("#signupPassword").val()
        if (username && password) {
            if (localStorage.getItem(username)) {
                alert('username already exists')
            }
            else {
                var user = {
                    username: username,
                    password: password,
                    tasks: []
                }
                localStorage.setItem(username, JSON.stringify(user))
                localStorage.setItem('currentUser', username)
                showTodo()
            }
        }
    })
    $("#logoutButton").click(function () {
        var username = $("#loginUsername").val()
        var password = $("#loginPassword").val()
        if (username && password) {
            var user = JSON.parse(localStorage.getItem(username))
            if (user && user.password === password) {
                localStorage.setItem("currentUser", username)
                showTodo()
            }
            else {
                alert("Invalid username or password")
            }
        }
        else {
            alert("please enter the username and password")
        }
    })
    $("#logoutButton").click(function () {
        localStorage.removeItem('currentUser')
        showLogin()
    })
    var user = JSON.parse(localStorage.getItem(currentUser))
    if (user && user.tasks.length > 0) {
        $.each(user.task, function (index, task) {
            addTaskToList(task);
        });
    }
    function addTaskToList(task) {
        var listItem = $('<li></li>');
        var taskText = $('<span class="taskText"></span>').text(task);
        var removeButton = $('<button class="removeTaskButton">Remove</button>');

        listItem.append(taskText);
        listItem.append(removeButton);
        $('#taskList').append(listItem);
    }

    $('#addTaskButton').click(function () {
        var taskInput = $("#taskInput")
        var taskText = taskInput.val()
        var currentUser = localStorage.getItem('currentUser')
        if (taskText) {
            var user = JSON.parse(localStorage.getItem(currentUser))
            user.tasks.push(taskText)
            localStorage.setItem(currentUser, JSON.stringify(user))
            addTaskToList(taskText)
            taskInput.val('')
        }
    })
    $(document).on('click', '.taskText', function() {
        $(this).toggleClass('text-decoration' ,'line-through');
      });
    
    $(document).on('click', '.removeTaskButton', function() {
        var taskText = $(this).siblings('.taskText').text();
        var currentUser = localStorage.getItem('currentUser');
    
        if (taskText && currentUser) {
          var user = JSON.parse(localStorage.getItem(currentUser));
          var index = user.tasks.indexOf(taskText);
    
          if (index !== -1) {
            user.tasks.splice(index, 1);
            localStorage.setItem(currentUser, JSON.stringify(user));
            $(this).closest('li').remove();
          }
        }
      })
})

