$(document)
    .ready(function() {

      // fix menu when passed
      $('.masthead')
        .visibility({
          once: false,
          onBottomPassed: function() {
            if ($(document).width() > 700)
            {
              $('.fixed.menu').transition('fade in');
            }
          },
          onBottomPassedReverse: function() {
            if ($(document).width() > 700)
            {
            $('.fixed.menu').transition('fade out')
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
