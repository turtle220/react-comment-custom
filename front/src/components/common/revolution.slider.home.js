import React, {Component} from 'react';

export default class SliderHome extends Component{

    componentDidMount(){
        var tpj = window.jQuery;

        if(tpj("#rev_slider_home").revolution == undefined){
            // revslider_showDoubleJqueryError("#rev_slider_home");
          }else{       
            var revapi34 = tpj("#rev_slider_home").show().revolution({
              sliderType:"standard",
              jsFileLocation:"js/revolution-slider/js/",
              sliderLayout:"auto",
              dottedOverlay:"none",
              delay:5000,
              navigation: {
                keyboardNavigation:"on",
                keyboard_direction: "horizontal",
                mouseScrollNavigation:"off",
                onHoverStop:"on",
                touch:{
                  touchenabled:"on",
                  swipe_threshold: 75,
                  swipe_min_touches: 1,
                  swipe_direction: "horizontal",
                  drag_block_vertical: false
                }
                ,
                arrows: {
                  style:"zeus",
                  enable:true,
                  hide_onmobile:true,
                  hide_under:600,
                  hide_onleave:true,
                  hide_delay:200,
                  hide_delay_mobile:1200,
                  tmp:'<div class="tp-title-wrap">    <div class="tp-arr-imgholder"></div> </div>',
                  left: {
                    h_align:"left",
                    v_align:"center",
                    h_offset:30,
                    v_offset:0
                  },
                  right: {
                    h_align:"right",
                    v_align:"center",
                    h_offset:30,
                    v_offset:0
                  }
                },
                bullets: {
                  enable:true,
                  hide_onmobile:true,
                  hide_under:600,
                  style:"metis",
                  hide_onleave:true,
                  hide_delay:200,
                  hide_delay_mobile:1200,
                  direction:"horizontal",
                  h_align:"center",
                  v_align:"bottom",
                  h_offset:0,
                  v_offset:30,
                  space:5,
                  tmp:'<span class="tp-bullet-img-wrap"><span class="tp-bullet-image"></span></span>'
                }
              },
              viewPort: {
                enable:true,
                outof:"pause",
                visible_area:"80%"
              },
              responsiveLevels:[1240,1024,778,480],
              gridwidth:[1240,1024,778,480],
              gridheight:[600,550,500,450],
              lazyType:"none",
              parallax: {
                type:"scroll",
                origo:"enterpoint",
                speed:400,
                levels:[5,10,15,20,25,30,35,40,45,50],
              },
              shadow:0,
              spinner:"off",
              stopLoop:"off",
              stopAfterLoops:-1,
              stopAtSlide:-1,
              shuffle:"off",
              autoHeight:"off",
              hideThumbsOnMobile:"off",
              hideSliderAtLimit:0,
              hideCaptionAtLimit:0,
              hideAllCaptionAtLilmit:0,
              debugMode:false,
              fallbacks: {
                simplifyAll:"off",
                nextSlideOnWindowFocus:"off",
                disableFocusListener:false,
              }
            });
          }
    }

    render(){
        return(
            <section id="home">
                <div className="container-fluid p-0">
        
        <div id="rev_slider_home_wrapper" className="rev_slider_wrapper" data-alias="news-gallery34" style={{margin:0,backgroundColor:'#ffffff', padding:0, marginTop:0, marginBottom:0}}>
          <div id="rev_slider_home" className="rev_slider fullwidthabanner" style={{display:'none'}} data-version="5.0.7">
            <ul>
              <li data-index="rs-1" data-transition="fade" data-slotamount="default" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb="images/bg/bg1.jpg" data-rotate="0"  data-fstransition="fade" data-saveperformance="off" data-title="Web Show" data-description="">
                <img src="images/bg/bg1.jpg" alt="" data-bgposition="center 30%" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10" className="rev-slidebg" data-no-retina />
                
                <div className="tp-caption tp-shape tp-shapewrapper tp-resizeme rs-parallaxlevel-0 bg-theme-colored-transparent-6" 
                  id="slide-1-layer-1" 
                  data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                  data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" 
                  data-width="full"
                  data-height="full"
                  data-whitespace="normal"
                  data-transform_idle="o:1;"
                  data-transform_in="opacity:0;s:1500;e:Power3.easeInOut;" 
                  data-transform_out="opacity:0;s:1000;e:Power3.easeInOut;s:1500;e:Power3.easeInOut;" 
                  data-start="0"
                  data-basealign="slide" 
                  data-responsive_offset="on" 
                  style={{zIndex: 5,backgroundColor:'rgba(0, 0, 0, 0.35)',borderColor:'rgba(0, 0, 0, 1.00)'}}>
                </div>
                <div className="tp-caption tp-resizeme rs-parallaxlevel-0 text-white text-uppercase font-roboto-slab font-weight-700" 
                  id="slide-1-layer-2" 
                  data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                  data-y="['top','top','top','top']" data-voffset="['195','195','160','170']" 
                  data-fontsize="['48','42','38','28']"
                  data-lineheight="['70','60','50','45']"
                  data-fontweight="['800','700','700','700']"
                  data-textalign="['center','center','center','center']"
                  data-width="['800','720','640','460']"
                  data-height="none"
                  data-whitespace="normal"
                  data-frames='[{"from":"y:-50px;opacity:0;","speed":1000,"to":"o:1;","delay":1000,"ease":"Power2.easeOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power4.easeIn"}]'
                  data-responsive_offset="on" 
                  style={{zIndex: 5, whiteSpace: 'nowrap'}}>Grow your <span className="text-theme-colored2">business</span> with us
                </div>
                <div className="tp-caption tp-resizeme text-center text-white rs-parallaxlevel-0" 
                  id="slide-1-layer-3" 
                  data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                  data-y="['top','top','top','top']" data-voffset="['275','260','220','220']"
                  data-fontsize="['16','16',16',16']"
                  data-lineheight="['24','24','24','24']"
                  data-fontweight="['400','400','400','400']"
                  data-textalign="['center','center','center','center']"
                  data-width="['800','650','600','460']"
                  data-height="none"
                  data-frames='[{"from":"x:-50px;opacity:0;","speed":1000,"to":"o:1;","delay":1500,"ease":"Power2.easeOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power4.easeIn"}]'
                  data-responsive_offset="on" 
                  style={{zIndex: 5, whiteSpace: 'nowrap'}}>We provides you our best business solution and professional services for our clients <br/> and  always try to achieve our clients trust and satisfaction
                </div>
                <div className="tp-caption rs-parallaxlevel-0" 
                  id="slide-1-layer-4" 
                  data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                  data-y="['top','top','top','top']" data-voffset="['350','330','290','290']" 
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-frames='[{"from":"x:-50px;opacity:0;","speed":1000,"to":"o:1;","delay":2000,"ease":"Power2.easeOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power4.easeIn"}]'
                  data-responsive_offset="on" 
                  data-responsive="off"
                  style={{zIndex: 5, whiteSpace: 'nowrap', letterSpacing:1}}><a className="btn btn-theme-colored2 btn-lg btn-flat text-white font-weight-600 pl-30 pr-30 mr-15" href="#">Our Service</a><a className="btn btn-default btn-transparent btn-bordered btn-lg btn-flat font-weight-600 pl-30 pr-30" href="#">Get a Quote</a>
                </div>
              </li>
              <li data-index="rs-2" data-transition="fade" data-slotamount="default" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb="images/bg/bg1.jpg" data-rotate="0"  data-fstransition="fade" data-saveperformance="off" data-title="Web Show" data-description="">
                <img src="images/bg/bg1.jpg" alt="" data-bgposition="center 30%" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10" className="rev-slidebg" data-no-retina />
                <div className="tp-caption tp-shape tp-shapewrapper tp-resizeme rs-parallaxlevel-0 bg-theme-colored-transparent-1" 
                  id="slide-2-layer-1" 
                  data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                  data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" 
                  data-width="full"
                  data-height="full"
                  data-whitespace="normal"
                  data-transform_idle="o:1;"
                  data-transform_in="opacity:0;s:1500;e:Power3.easeInOut;" 
                  data-transform_out="opacity:0;s:1000;e:Power3.easeInOut;s:1500;e:Power3.easeInOut;" 
                  data-start="0"
                  data-basealign="slide" 
                  data-responsive_offset="on" 
                  style={{zIndex: 5,backgroundColor:'rgba(0, 0, 0, 0.35)', borderColor:'rgba(0, 0, 0, 1.00)'}}> 
                </div>
                <div className="tp-caption tp-resizeme rs-parallaxlevel-0 text-white text-uppercase font-roboto-slab font-weight-700" 
                  id="slide-2-layer-2"
                  data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                  data-y="['top','top','top','top']" data-voffset="['195','195','160','170']" 
                  data-fontsize="['52','42','38','28']"
                  data-lineheight="['70','60','50','45']"
                  data-fontweight="['800','700','700','700']"
                  data-textalign="['center','center','center','center']"
                  data-width="['800','720','640','460']"
                  data-height="none"
                  data-whitespace="normal"
                  data-frames='[{"from":"y:-50px;opacity:0;","speed":1000,"to":"o:1;","delay":1000,"ease":"Power2.easeOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power4.easeIn"}]'
                  data-responsive_offset="on" 
                  style={{zIndex: 5, whiteSpace: 'nowrap'}}>We Are ConsultingPro
                </div>
                <div className="tp-caption tp-resizeme text-center text-white rs-parallaxlevel-0" 
                  id="slide-2-layer-3" 
                  data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                  data-y="['top','top','top','top']" data-voffset="['275','260','220','220']"
                  data-fontsize="['16','16',16',16']"
                  data-lineheight="['24','24','24','24']"
                  data-fontweight="['400','400','400','400']"
                  data-textalign="['center','center','center','center']"
                  data-width="['800','650','600','460']"
                  data-height="none"
                  data-frames='[{"from":"x:-50px;opacity:0;","speed":1000,"to":"o:1;","delay":1500,"ease":"Power2.easeOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power4.easeIn"}]'
                  data-responsive_offset="on" 
                  style={{zIndex: 5, whiteSpace: 'nowrap'}}>We provides you our best business solution and professional services for our clients <br/> and  always try to achieve our clients trust and satisfaction
                </div>
                <div className="tp-caption rs-parallaxlevel-0" 
                  id="slide-2-layer-4" 
                  data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                  data-y="['top','top','top','top']" data-voffset="['350','330','290','290']" 
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-frames='[{"from":"x:-50px;opacity:0;","speed":1000,"to":"o:1;","delay":2000,"ease":"Power2.easeOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power4.easeIn"}]'
                  data-responsive_offset="on" 
                  data-responsive="off"
                  style={{zIndex: 5, whiteSpace: 'nowrap', letterSpacing:1}}><a className="btn btn-theme-colored2 btn-lg btn-flat text-white font-weight-600 pl-30 pr-30 mr-15" href="#">Our Service</a><a className="btn btn-default btn-transparent btn-bordered btn-lg btn-flat font-weight-600 pl-30 pr-30" href="#">Get a Quote</a>
                </div>
              </li>
              <li data-index="rs-3" data-transition="fade" data-slotamount="default" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb="images/bg/bg1.jpg" data-rotate="0"  data-fstransition="fade" data-saveperformance="off" data-title="Web Show" data-description="">
                <img src="images/bg/bg1.jpg" alt="" data-bgposition="center 30%" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="10" className="rev-slidebg" data-no-retina />
                
                <div className="tp-caption tp-shape tp-shapewrapper tp-resizeme rs-parallaxlevel-0 bg-theme-colored-transparent-1" 
                  id="slide-3-layer-1" 
                  data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                  data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" 
                  data-width="full"
                  data-height="full"
                  data-whitespace="normal"
                  data-transform_idle="o:1;"
                  data-transform_in="opacity:0;s:1500;e:Power3.easeInOut;" 
                  data-transform_out="opacity:0;s:1000;e:Power3.easeInOut;s:1500;e:Power3.easeInOut;" 
                  data-start="0"
                  data-basealign="slide" 
                  data-responsive_offset="on" 
                  style={{zIndex: 5, backgroundColor:'rgba(0, 0, 0, 0.35)', borderColor:'rgba(0, 0, 0, 1.00)'}}> 
                </div>

                <div className="tp-caption tp-resizeme rs-parallaxlevel-0 text-white text-uppercase font-roboto-slab font-weight-700" 
                  id="slide-3-layer-2" 
                  data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                  data-y="['top','top','top','top']" data-voffset="['195','195','160','170']" 
                  data-fontsize="['48','42','38','28']"
                  data-lineheight="['70','60','50','45']"
                  data-fontweight="['800','700','700','700']"
                  data-textalign="['center','center','center','center']"
                  data-width="['800','720','640','460']"
                  data-height="none"
                  data-whitespace="normal"
                  data-frames='[{"from":"y:-50px;opacity:0;","speed":1000,"to":"o:1;","delay":1000,"ease":"Power2.easeOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power4.easeIn"}]'
                  data-responsive_offset="on" 
                  style={{zIndex: 5, whiteSpace: 'nowrap'}}>Get Best Business Solution
                </div>
                <div className="tp-caption tp-resizeme text-center text-white rs-parallaxlevel-0" 
                  id="slide-3-layer-3" 
                  data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                  data-y="['top','top','top','top']" data-voffset="['275','260','220','220']"
                  data-fontsize="['16','16',16',16']"
                  data-lineheight="['24','24','24','24']"
                  data-fontweight="['400','400','400','400']"
                  data-textalign="['center','center','center','center']"
                  data-width="['800','650','600','460']"
                  data-height="none"
                  data-frames='[{"from":"x:-50px;opacity:0;","speed":1000,"to":"o:1;","delay":1500,"ease":"Power2.easeOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power4.easeIn"}]'
                  data-responsive_offset="on" 
                  style={{zIndex: 5, whiteSpace: 'nowrap'}}>We provides you our best business solution and professional services for our clients <br/> and  always try to achieve our clients trust and satisfaction
                </div>
                <div className="tp-caption rs-parallaxlevel-0" 
                  id="slide-3-layer-4" 
                  data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                  data-y="['top','top','top','top']" data-voffset="['350','330','290','290']" 
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-frames='[{"from":"x:-50px;opacity:0;","speed":1000,"to":"o:1;","delay":2000,"ease":"Power2.easeOut"},{"delay":"wait","speed":1500,"to":"opacity:0;","ease":"Power4.easeIn"}]'
                  data-responsive_offset="on" 
                  data-responsive="off"
                  ><a className="btn btn-theme-colored2 btn-lg btn-flat text-white font-weight-600 pl-30 pr-30 mr-15" href="#">Our Service</a><a className="btn btn-default btn-transparent btn-bordered btn-lg btn-flat font-weight-600 pl-30 pr-30" href="#">Get a Quote</a>
                </div>
              </li>
            </ul>
            <div className="tp-bannertimer tp-bottom" ></div>
          </div>
        </div>

     

      </div>
    </section>
        )
    }

}