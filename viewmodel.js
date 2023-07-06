define(['knockout'], function (ko) {
    function StickyNotesViewModel() {
      var self = this;
  
      self.taskInput = ko.observable('');
      self.notes = ko.observableArray([]);
  
      self.addNote = function () {
        var task = self.taskInput();
        self.createStickyNoteElement(task);
        self.taskInput('');
      };
  
      self.createStickyNoteElement = function (task) {
        var note = { task: ko.observable(task) };
        self.notes.push(note);
      };
  
      self.removeNote = function (note) {
        self.notes.remove(note);
      };
    }
  
    return StickyNotesViewModel;
  });
  