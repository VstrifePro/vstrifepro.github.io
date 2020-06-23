$(document)
    .ready(function() {

      // fix menu when passed
      $('.masthead')
        .visibility({
          once: false,
          onBottomPassed: function() {
            if ($(document).width() > 700 && !$('.ui.sidebar').sidebar('is visible'))
            {
              $('.fixed.menu').transition('fade in');
            }
            else{
              $('.fixed.menu').removeAttr("style")
            }
          },
          onBottomPassedReverse: function() {
            if ($(document).width() > 700 && !$('.ui.sidebar').sidebar('is visible'))
            {
            $('.fixed.menu').transition('fade out')
            }
            else{
              $('.fixed.menu').removeAttr("style")
            }
          }
        })
      ;

      // create sidebar and attach to menu open
      $('.ui.sidebar')
        .sidebar('attach events', '.toc.item')
      ;

    })
  ;
