// SEMPLIFICO VARIABILI
var barraMenu = $('i.fas.fa-bars');
var hamuberMenu = $('.hamburger-menu');
var hamburMenuClose =  $('.hamburger-menu a.close');
var hamburMenuOpen = $('.header-right > a');
// MOSTRO MENU AL CLICK
barraMenu.click(
  function() {
    hamuberMenu.show(500);
  }
);
// NASCONDO MENU AL CLICK
hamuberMenu.click(
  function() {
   hamuberMenu.hide(500);
  }
);


// SECONDO METODO CON CLASSE PRE-ESISTENTE
// MOSTRO MENU AL CLICK
hamburMenuOpen.click(
  function() {
    hamuberMenu.addClass('active');
  }
);
// NASCONDO MENU AL CLICK
hamburMenuClose.click(
  function() {
    hamuberMenu.removeClass('active');
  }
);
