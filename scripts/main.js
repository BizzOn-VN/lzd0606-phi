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

 const textElement = document.getElementById('myText');
  const textContent = textElement.textContent;
  if (textContent.length > 1) {
    textElement.innerHTML = textContent.slice(0, -1) + '<span style="letter-spacing: 0;">' + textContent.slice(-1) + '</span>';
  }
   // $("#md-popup-2").fancybox().trigger('click');


      

