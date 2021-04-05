var tpj = jQuery;
tpj.noConflict();
var revapi1;
tpj(document).ready(function () {
  if (tpj("#rev_slider_1_2").revolution == undefined) {
    revslider_showDoubleJqueryError("#rev_slider_1_2");
  } else {
    revapi1 = tpj("#rev_slider_1_2")
      .show()
      .revolution({
        sliderType: "standard",
        sliderLayout: "fullwidth",
        dottedOverlay: "none",
        delay: 5000,
        navigation: {
          keyboardNavigation: "off",
          keyboard_direction: "horizontal",
          mouseScrollNavigation: "off",
          onHoverStop: "on",
          touch: {
            touchenabled: "on",
            swipe_threshold: 75,
            swipe_min_touches: 1,
            swipe_direction: "horizontal",
            drag_block_vertical: false,
          },
        },
        gridwidth: 1920,
        gridheight: 800,
        lazyType: "none",
        parallax: {
          type: "scroll",
          origo: "enterpoint",
          speed: 400,
          levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
          disable_onmobile: "on",
        },
        shadow: 0,
        spinner: "sipnner3",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        disableProgressBar: "on",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        startWithSlide: 0,
        debugMode: false,
        fallbacks: {
          simplifyAll: "off",
          nextSlideOnWindowFocus: "off",
          disableFocusListener: "off",
        },
      });
  }
});

jQuery(window).load(function () {
  var retina = window.devicePixelRatio > 1 ? true : false;
  if (retina) {
    var retinaEl = jQuery("#logo img.logo-main");
    var retinaLogoW = retinaEl.width();
    var retinaLogoH = retinaEl.height();
    retinaEl
      .attr("src", "content/builder/images/retina-builder.png")
      .width(retinaLogoW)
      .height(retinaLogoH);
    var stickyEl = jQuery("#logo img.logo-sticky");
    var stickyLogoW = stickyEl.width();
    var stickyLogoH = stickyEl.height();
    stickyEl
      .attr("src", "content/builder/images/retina-builder.png")
      .width(stickyLogoW)
      .height(stickyLogoH);
    var mobileEl = jQuery("#logo img.logo-mobile");
    var mobileLogoW = mobileEl.width();
    var mobileLogoH = mobileEl.height();
    mobileEl
      .attr("src", "content/builder/images/retina-builder.png")
      .width(mobileLogoW)
      .height(mobileLogoH);
  }
});
