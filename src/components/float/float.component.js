'use strict';

// IMPORT
import styles from './float.style.css';

let app = angular.module('app');

app.component('floatingItems', {

  // TEMPLATE
  template: require('./float.template.html'),
  // CONTROLLER
  controller: function() {
    $(function(){				  
        var parallaxContainer 	  = $("#parallax-container");
        var parallaxItems		    = parallaxContainer.find(".parallax");
        var fixer				          = 0.0008;

        $(document).on("mousemove", function(event){					

          var pageX =  event.pageX - (parallaxContainer.width() * 0.5);
          var pageY =  event.pageY - (parallaxContainer.height() * 0.5); 

          parallaxItems.each(function(){

            var item 	= $(this);
            var speed	= item.data("speed"); 

            TweenLite.to(item, 0.5, {
              x: (item.position().left + pageX * speed )*fixer,
              y: (item.position().top + pageY * speed)*fixer
            });

          });

        });				
      });
  }
})