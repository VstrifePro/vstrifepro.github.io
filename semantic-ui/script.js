$(document)
    .ready(function() {
      //menu button
      $('.ui.button.full').click(function(){
       if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen(); 
          }
        }
      })

      $('.ui.button.top').click(function(){
       window.scrollTo({ top: 0, behavior: 'smooth' });
      })

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
