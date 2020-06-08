// SEMPLIFICO VARIABILI
var hamburMenuOpen = $('.header-right > a');
var hamburMenuClose =  $('a[href].close');

// MOSTRO MENU AL CLICK
hamburMenuOpen.click(
  function() {
    $('.hamburger-menu').show(500);
  }
);

// NASCONDO MENU AL CLICK
$('.hamburger-menu').click(
  function() {
   $('.hamburger-menu').hide(500);
  }
);


// // SECONDO METODO CON CLASSE PRE-ESISTENTE
// // MOSTRO MENU AL CLICK
// hamburMenuOpen.click(
//   function() {
//     $('.hamburger-menu').addClass('active');
//   }
// );

// // NASCONDO MENU AL CLICK
// hamburMenuClose.click(
//   function() {
//     $('.hamburger-menu').removeClass('active');
//   }
// );
