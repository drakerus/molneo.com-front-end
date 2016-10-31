jQuery(function($) {

// слайдер с каталога
  $("#slides").carouFredSel( {
    items: {
      visible         : 1,
      minimum         : 1
    },
    direction   : "up",
    scroll: {
      fx              : "directscroll", // "none", "scroll", "directscroll", "fade", "crossfade", "cover", "cover-fade", "uncover" or "uncover-fade".
      easing          : "linear",  // "linear" and "swing", built in: "quadratic", "cubic" and "elastic"
      items           : 1,
      duration        : 400,
      pauseOnHover    : true
    },
    auto: {
      timeoutDuration : 2000,
      delay           : 2000
    },
    pagination: {
      container       : ".pagination",
      keys            : true,
      anchorBuilder   : function( nr ) {
        var title = $(this).find('.slide_ttl').text();
        return "<span>" + title + "</span>";
      }

    },
    mousewheel        : false
  } );

} );