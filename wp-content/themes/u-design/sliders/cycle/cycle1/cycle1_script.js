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


// Cycle plugin config
jQuery(document).ready(function($){
    var baseURL = $('input.base-url').val();
    var c1TransitionType = "fade";
    var c1Speed = 1000;
    var c1Timeout = 5000;
    var c1Sync = 1;

    $.get(baseURL+"/wp-content/themes/u-design/sliders/cycle/cycle1/cycle1_params.php", function(theXML){
	$('settings',theXML).each(function(i){
	    c1TransitionType = $(this).find("fx").text();
	    c1Speed = parseInt($(this).find("speed").text());
	    c1Timeout = parseInt($(this).find("timeout").text());
	    c1Sync = parseInt($(this).find("sync").text());
	});

	/* homepage slider params */
	$('#c1-slider').cycle({
	    fx:			c1TransitionType,
	    speed:		c1Speed,
	    timeout:		c1Timeout,
	    sync:		c1Sync,
	    randomizeEffects:	0,
	    prev:		'#slider-prev',
	    next:		'#slider-next',
	    pager:		'#c1-nav'
	});

	$('#c1-pauseButton').click(function() {
	    $('#c1-slider').cycle('pause');
	    return false;
	});

	$('#c1-resumeButton').click(function() {
	    $('#c1-slider').cycle('resume', true);
	    return false;
	});

    });
});



}
/*
     FILE ARCHIVED ON 14:13:14 Aug 24, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:17:45 Jan 05, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  esindex: 0.014
  CDXLines.iter: 19.943 (3)
  exclusion.robots: 0.141
  PetaboxLoader3.resolve: 158.595 (2)
  PetaboxLoader3.datanode: 4013.553 (4)
  captures_list: 203.331
  LoadShardBlock: 166.084 (3)
  exclusion.robots.policy: 0.129
  RedisCDXSource: 3.555
  load_resource: 4014.688
*/