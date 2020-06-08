// SEMPLIFICO VARIABILI
var barraMenu = $('i.fas.fa-bars');
var hamuberMenu = $('.hamburger-menu');
// MOSTRO MENU AL CLICK
barraMenu.click(
  function() {
    hamuberMenu.show(500);
  }
)
// NASCONDO MENU AL CLICK
hamuberMenu.click(
  function() {
   hamuberMenu.hide(500);
  }
);
