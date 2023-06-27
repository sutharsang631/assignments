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