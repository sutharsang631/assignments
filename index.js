require(['knockout', 'viewmodel', 'jquery', 'jqueryUI'], function (ko, StickyNotesViewModel,$) {
    var viewModel = new StickyNotesViewModel();
    ko.applyBindings(viewModel);

    ko.bindingHandlers.draggable = {
      init: function (element) {
        $(element).draggable();
      }
    };
  });