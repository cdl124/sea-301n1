(function(module) {
  var aboutController = {};

  // TODO: Define a function that hides all main section elements, and then reveals just the #about section:
  aboutController.index = function() {
    $('main').hide().show('#about');
  };

  module.aboutController = aboutController;
})(window);
