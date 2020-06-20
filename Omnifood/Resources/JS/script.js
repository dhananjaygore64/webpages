$(document).ready(function(){
/*********************************************************/
/*                  Sticky navigation                    */
/*********************************************************/
    
    $('.js--section-features').waypoint(function(direction){
        if(direction=="down"){
            $('nav').addClass('sticky-nav');
        }else{
            $('nav').removeClass('sticky-nav');
        }
    },{
        offset: '60px;' 
    });
/*********************************************************/
/*                  Scroll on Buttons                    */
/*********************************************************/
    $('.js--scroll-to-plan').click(function(){
         $('html,body').animate({scrollTop: $('.js--section-plan').offset().top},1000);        
    });
    $('.js--scroll-to-features').click(function(){
         $('html,body').animate({scrollTop: $('.js--section-features').offset().top},1000);        
    });
   
/*********************************************************/
/*                  Navigation Scroll                    */
/*********************************************************/
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
});


/*****************************************/
/*               Animations              */
/*****************************************/

     $('.js--wp-1').waypoint(function(direction){
             $('.js--wp-1').addClass('animated animate__fadeIn');        
        },{
         offset: '50%'
     });
     $('.js--wp-2').waypoint(function(direction){
             $('.js--wp-2').addClass('animated animate__fadeInUp');        
        },{
         offset: '50%'
     });
     $('.js--wp-3').waypoint(function(direction){
             $('.js--wp-3').addClass('animated animate__fadeIn');        
        },{
         offset: '50%'
     });
     $('.js--wp-4').waypoint(function(direction){
             $('.js--wp-4').addClass('animated animate__pulse');        
        },{
         offset: '50%'
     });

/*****************************************/
/*             Mobile Nav                */
/*****************************************/

    $('.js--nav-icon').click(function(){
        var nav=$('.js--main-nav');
         var icon=$('.js--nav-icon i')
        nav.slideToggle(200);       // this display main-nav box on click
        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else{
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon-round');
        }

       
    });
