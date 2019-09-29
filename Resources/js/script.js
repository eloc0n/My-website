$(document).ready(function(){
    /* For the sticky navigation */
    $('.js--programming').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '100px;'
    });


    /* Scroll on buttons */
    $('.js--scroll-to-programming').click(function () {
        $('html, body').animate({scrollTop: $('.js--programming').offset().top}, 1000); 
    });

    $('.js--scroll-to-mechanical').click(function () {
        $('html, body').animate({scrollTop: $('.js--mechanical').offset().top}, 1000); 
    });


    /* Navigation scroll */
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });
    });



});