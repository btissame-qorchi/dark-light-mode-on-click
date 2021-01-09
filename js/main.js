$(document).ready(function(){
  /**
  * Define a set of actions, keeps our jQuery neater
  */
  var actions = {
    toggleMenu: function() {
      $('body').toggleClass('nav-open');
    },
    closeMenu: function() {
      $('body').removeClass('nav-open');
    }
  };

  // When any element with a data-action attribute is clicked, we run the action if it exists
  $('body').on('click', '[data-action]', function() {
    var action = $(this).data('action');
    if (action in actions) {
      actions[action].apply(this, arguments);
    }
  });
  
  // Handle body taps to close the menu
  $('html').on('touchstart', 'body.nav-open', function(e){
    if(!$(e.target).is('a')){
      actions.closeMenu();
    }
  });

  // Handle body clicks to close the menu
  $('html').on('click', 'body.nav-open', function(e){
    if(!$(e.target).is('a')){
      actions.closeMenu();
    }
  });



  //Dark/Light mode code

});