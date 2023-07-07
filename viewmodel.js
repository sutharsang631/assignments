define(['knockout'], function (ko) {
  function StickyNotesViewModel() {
    var self = this
    self.taskInput = ko.observable('')
    self.notes = ko.observableArray([])

    self.addNote = function () {
      var task = self.taskInput();
      if (task == '') {
        alert("enter valid task")
      }
      else {
        self.createStickyNoteElement(task);

        self.taskInput('')
      }
    }

    self.createStickyNoteElement = function (task) {
      self.tasky=ko.observable(task)
      // console.log(self.tasky())
      // var note = { task: self.tasky}
      var note = { task: task}
      // console.log(note)

      self.notes.push(note)
      // console.log(this.notes())
    }

    self.removeNote = function (note) {
      self.notes.remove(note)
    }
    
  }

  return StickyNotesViewModel
})
