 // nav bar
 const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
 const navbarLinks = document.getElementsByClassName('navbar-links');

 toggleButton.addEventListener('click' , function() {
     for(var i=0 ; i<navbarLinks.length; i++)
     navbarLinks[i].classList.toggle('active');

 });


//  MIXITUP
var mixer = mixitup('.work-grid');



//CONTER JS DESIGN

jQuery(document).ready(function($) {
    $('.count').counterUp({
        delay: 10,
        time: 2000
    });
});
//CONTER JS DESIGN