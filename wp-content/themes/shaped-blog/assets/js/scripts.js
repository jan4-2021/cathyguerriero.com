var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");


 jQuery(function ($) {
    'use strict';

    // Preloader
    (function () {
        $(window).load(function() {
            $('#pre-status').fadeOut();
            $('#st-preloader').delay(350).fadeOut('slow');
        });
    }());


    // Back To Top
    (function () {
      $(window).scroll(function() {
          if ($(this).scrollTop() > 100) {
              $('.scroll-up').fadeIn();
          } else {
              $('.scroll-up').fadeOut();
          }
      });
      $('.scroll-up a').click(function(){
            $('html, body').animate({scrollTop : 0},800);
            return false;
        });
    }());


    // fitvids js
    (function () {

        $(".wpb_wrapper").fitVids();
        $(".post-content").fitVids();

    }()); 

    
});


}
/*
     FILE ARCHIVED ON 22:16:40 Apr 14, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:16:24 Jan 05, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.216
  exclusion.robots.policy: 0.201
  PetaboxLoader3.datanode: 55.465 (4)
  PetaboxLoader3.resolve: 37.46
  RedisCDXSource: 0.687
  LoadShardBlock: 54.954 (3)
  esindex: 0.015
  captures_list: 83.32
  CDXLines.iter: 23.866 (3)
  load_resource: 45.437
*/