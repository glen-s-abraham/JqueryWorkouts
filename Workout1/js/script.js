$(function(){
   $('.nav-bar').hide();
   $('.nav-header').hide();
   $('.nav-items').hide();
   $('.landing').hide();
   $('h1').hide();
   $('p').hide();
   $('button').hide();
   $('.nav-bar').slideDown(1000);
   $('.landing').delay(1000).slideDown(1000);
   $('.nav-header').delay(1000).fadeIn(1000);
   $('.nav-items').delay(1000).fadeIn(1000);
   $('h1').delay(2000).fadeIn(2000);
   $('p').delay(2000).fadeIn(2000);
   $('button').delay(2000).fadeIn(2000);
   
});