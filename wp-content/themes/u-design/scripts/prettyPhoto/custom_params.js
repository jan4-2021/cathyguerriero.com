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

jQuery(document).ready(function($){
        $("a[rel^='wp-prettyPhoto'], a[rel^='prettyPhoto']").prettyPhoto({
                animation_speed: 'normal', /* fast/slow/normal */
                slideshow: 5000, /* false OR interval time in ms */
                autoplay_slideshow: false, /* true/false */
                opacity: 0.80, /* Value between 0 and 1 */
                show_title: true, /* true/false */
                allow_resize: true, /* Resize the photos bigger than viewport. true/false */
                default_width: 500,
                default_height: 344,
                counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
                theme: 'dark_rounded', /* pp_default / light_rounded / dark_rounded / light_square / dark_square / facebook */
                horizontal_padding: 20, /* The padding on each side of the picture */
                hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
                wmode: 'opaque', /* Set the flash wmode attribute */
                autoplay: true, /* Automatically start videos: True/False */
                modal: false, /* If set to true, only the close button will close the window */
                deeplinking: false, /* Allow prettyPhoto to update the url to enable deeplinking. */
                overlay_gallery: true, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
                keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
                changepicturecallback: function(){}, /* Called everytime an item is shown/changed */
                callback: function(){}, /* Called when prettyPhoto is closed */
                ie6_fallback: true,
                markup: '<div class="pp_pic_holder"> \
                                        <div class="ppt">&nbsp;</div> \
                                        <div class="pp_top"> \
                                                <div class="pp_left"></div> \
                                                <div class="pp_middle"></div> \
                                                <div class="pp_right"></div> \
                                        </div> \
                                        <div class="pp_content_container"> \
                                                <div class="pp_left"> \
                                                <div class="pp_right"> \
                                                        <div class="pp_content"> \
                                                                <div class="pp_loaderIcon"></div> \
                                                                <div class="pp_fade"> \
                                                                        <a href="#" class="pp_expand" title="Expand the image">Expand</a> \
                                                                        <div class="pp_hoverContainer"> \
                                                                                <a class="pp_next" href="#">next</a> \
                                                                                <a class="pp_previous" href="#">previous</a> \
                                                                        </div> \
                                                                        <div id="pp_full_res"></div> \
                                                                        <div class="pp_details"> \
                                                                                <div class="pp_nav"> \
                                                                                        <a href="#" class="pp_arrow_previous">Previous</a> \
                                                                                        <p class="currentTextHolder">0/0</p> \
                                                                                        <a href="#" class="pp_arrow_next">Next</a> \
                                                                                </div> \
                                                                                <p class="pp_description"></p> \
                                                                                <div class="pp_social">{pp_social}</div> \
                                                                                <a class="pp_close" href="#">Close</a> \
                                                                        </div> \
                                                                </div> \
                                                        </div> \
                                                </div> \
                                                </div> \
                                        </div> \
                                        <div class="pp_bottom"> \
                                                <div class="pp_left"></div> \
                                                <div class="pp_middle"></div> \
                                                <div class="pp_right"></div> \
                                        </div> \
                                </div> \
                                <div class="pp_overlay"></div>',
                gallery_markup: '<div class="pp_gallery"> \
                                                        <a href="#" class="pp_arrow_previous">Previous</a> \
                                                        <div> \
                                                                <ul> \
                                                                        {gallery} \
                                                                </ul> \
                                                        </div> \
                                                        <a href="#" class="pp_arrow_next">Next</a> \
                                                </div>',
                image_markup: '<img id="fullResImage" src="{path}" />',
                flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
                quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="https://web.archive.org/web/20130824113712/http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="https://web.archive.org/web/20130824113712/http://www.apple.com/quicktime/download/"></embed></object>',
                iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
                inline_markup: '<div class="pp_inline">{content}</div>',
                custom_markup: '',
                social_tools: '<div class="twitter"><a href="https://web.archive.org/web/20130824113712/http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="https://web.archive.org/web/20130824113712/http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="https://web.archive.org/web/20130824113712/http://www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>' /* html or false to disable */
        });
});

}
/*
     FILE ARCHIVED ON 11:37:12 Aug 24, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:16:35 Jan 05, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  RedisCDXSource: 2.26
  esindex: 0.015
  exclusion.robots.policy: 0.195
  LoadShardBlock: 209.544 (3)
  PetaboxLoader3.datanode: 189.729 (4)
  exclusion.robots: 0.211
  CDXLines.iter: 22.133 (3)
  captures_list: 238.396
  load_resource: 89.625
  PetaboxLoader3.resolve: 36.078
*/