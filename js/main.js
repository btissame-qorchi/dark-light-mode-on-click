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

  function themeDarkLight(){

    const date = new Date();
    const hour = date.getHours();

    if(hour > 5 || hour < 19){
      //We can add a class to the body to work the styles of the elements for each mode (light)
      $('body').addClass('light_mode');
      //Or modify element style directly in js with Css variables
      document.documentElement.style.setProperty('--color','#000');
      document.documentElement.style.setProperty('--bodyBg','#e4e4e4');
      document.documentElement.style.setProperty('--containerBg','#fff');
    }else{
       //We can add a class to the body to work the styles of the elements for each mode (dark)
      $('body').addClass('dark_mode');
      //Or modify element style directly in js with Css variables
      document.documentElement.style.setProperty('--color','#e4e4e4');
      document.documentElement.style.setProperty('--bodyBg','#000');
      document.documentElement.style.setProperty('--containerBg','#353535');
    }
  }
  themeDarkLight();

});