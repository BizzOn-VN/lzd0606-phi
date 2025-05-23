'use strict';

/* HELPER: Checks Whether an Element Exists
----------------------------------------------------------------------------------------------------*/
(function( $ ) {

  $.fn.extend({
    exists: function() {
      if ( this.length > 0 ) {
        return true;
      } else {
        return false;
      }
    }
  });

})( jQuery );



jQuery(document).on("ready",function () {
	
});









 $('.md-boxes .md-col').height(h3height); 
 var h3height = 0;
     $('.md-boxes .md-col').each(function() {
         if(h3height < $(this).height()){
           h3height = $(this).height();
         };
     });
 $('.md-boxes .md-col').height(h3height); 
 var onresize = function() {
    $('.md-boxes .md-col').css("height","auto");
            var h3height = 0;
            $('.md-boxes .md-col').each(function() {
                if(h3height < $(this).height()){
                  h3height = $(this).height();
                };
            });
            $('.md-boxes .md-col').height(h3height);
    };
 window.addEventListener("resize", onresize);

    // $("#md-popup-2").fancybox().trigger('click');
    // $("#md-popup-3").fancybox().trigger('click');


      

