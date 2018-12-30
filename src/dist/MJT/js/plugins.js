
/* ==============================================
PopUp Modal
=============================================== */
$(window).load(function() {

	 $(".modal").each( function(){
	    $(this).wrap('<div class="overlay"></div>')
	});

	$(".open-modal").on('click', function(e){
	    e.preventDefault();
	    e.stopImmediatePropagation;
	    
	    var $this = $(this),
	            modal = $($this).data("modal");
	    
	    $(modal).parents(".overlay").addClass("open");
	    setTimeout( function(){
	        $(modal).addClass("open");
	    }, 350);
	    
	    $(document).on('click', function(e){
	        var target = $(e.target);
	        
	        if ($(target).hasClass("overlay")){
	            $(target).find(".modal").each( function(){
	                $(this).removeClass("open");
	            });
	            setTimeout( function(){
	                $(target).removeClass("open");
	            }, 350);
	        }
	        
	    });
	    
	});

	$(".close-modal").on('click', function(e){
	    e.preventDefault();
	    e.stopImmediatePropagation;
	    
	    var $this = $(this),
	            modal = $($this).data("modal");
	    
	    $(modal).removeClass("open");
	    setTimeout( function(){ 
	        $(modal).parents(".overlay").removeClass("open");
	    }, 350);
	    
	}); 
});
 /* ==============================================
Page Loader
=============================================== */

$(window).load(function() {
	'use strict';
	$(".loader-item").delay(700).fadeOut();
	$("#pageloader").delay(1200).fadeOut("slow");
});

 /* ==============================================
Fit Videos
=============================================== */
$(window).load(function(){
	'use strict';
     $(".fit-vids").fitVids();
 });

/* ==============================================
Drop Down Menu Fade Effect
=============================================== */	

$('.nav-toggle').hover(function() {
	'use strict';
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(250);
    }, function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(250)
 });

/* ==============================================
Mobile Menu Button
=============================================== */	

$('.mini-nav-button').click(function() {
    $(".nav-menu").slideToggle("9000");
 });

$('.nav a').click(function () {
	if ($(window).width() < 970) {
    	$(".nav-menu").slideToggle("2000")}
	
});

/* ==============================================
Flex Slider Home Page
=============================================== */	
	
 $(window).load(function(){
	  'use strict';

      $('.hometexts').flexslider({
        animation: "slide",
		selector: ".slide-text .hometext",
		controlNav: false,
		directionNav: false ,
		slideshowSpeed: 4000,  
		direction: "vertical",
        start: function(slider){
         $('body').removeClass('loading'); 
        }
      });
 });


 /* ==============================================
Flex Slider Home Page Animated Version
=============================================== */	
	
 $(window).load(function(){
	  'use strict';
		
      $('.hometexts-1').flexslider({
        animation: "fade",
		selector: ".slide-text-1 .hometext-1",
		controlNav: false,
		directionNav: false ,
		slideshowSpeed: 5000,  
		direction: "horizontal",
        start: function(slider){
         $('body').removeClass('loading'); 
        }
      });
 });

  /* ==============================================
Flex Slider Home Page V5
=============================================== */	
	
 $(window).load(function(){
	  'use strict';
		
      $('.hometexts-5').flexslider({
        animation: "fade",
		selector: ".slide-text-5 .hometext-5",
		controlNav: false,
		directionNav: true ,
		slideshowSpeed: 5000,  
		direction: "horizontal",
        start: function(slider){
         $('body').removeClass('loading'); 
        }
      });
 });

  /* ==============================================
Flex Slider Blog
=============================================== */	
	
 $(window).load(function(){
	  'use strict';
		
      $('.post .flex').flexslider({
        animation: "fade",
		selector: ".post-slides .post-slide",
		controlNav: false,
		directionNav: true ,
		slideshowSpeed: 5000,  
		direction: "horizontal",
        start: function(slider){
         $('body').removeClass('loading'); 
        }
      });
 });


/* ==============================================
Home Super Slider (images)
=============================================== */

 $('#slides').superslides({
      animation: 'fade',
    });

 /* ==============================================
Scroll Navigation
=============================================== */	

$(function() {
		'use strict';

		$('.scroll').bind('click', function(event) {
			var $anchor = $(this);
			var headerH = $('#navigation').outerHeight();
			$('html, body').stop().animate({
				scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
			}, 1200, 'easeInOutExpo');

			event.preventDefault();
		});
	});



 /* ==============================================
Active Navigation Calling
=============================================== */

$('body').scrollspy({ 
	target: '.nav-menu',
	offset: 95
})

 /* ==============================================
Tooltips Calling
=============================================== */	

$('[data-toggle="tooltip"]').tooltip();

/* ==============================================
Navigation Scroll Effect
=============================================== */


$(document).ready(function () {
	'use strict';

    var menu = $('#navigation');

    $(window).scroll(function () {
        var y = $(this).scrollTop();
        var z = $('.waypoint').offset().top - 200;

        if (y >= z) {

            menu.removeClass('not-visible-nav').addClass('visible-nav');

        }
        else{
            menu.removeClass('visible-nav').addClass('not-visible-nav');
             console.log("got here");
        }
    });

});


 /* ==============================================
Flex Slider Testimonials
=============================================== */	
	
 $(window).load(function(){
	  'use strict';
		
      $('.inner').flexslider({
        animation: "fade",
		selector: ".t-slides .monial",
		controlNav: false,
		directionNav: true ,
		slideshowSpeed: 7000,  
		direction: "horizontal",
        start: function(slider){
          $('body').removeClass('loading'); 
        }
      });
 });


 /* ==============================================
Pretty Photo
=============================================== */	
	
	jQuery(document).ready(function(){
    jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({
        theme: "light_square",
    });
  });



/* ==============================================
Parallax Calling
=============================================== */


( function ( $ ) {
'use strict';
$(document).ready(function(){
$(window).bind('load', function () {
		parallaxInit();						  
	});
	function parallaxInit() {
		testMobile = isMobile.any();
		if (testMobile == null)
		{
			$('.image1').parallax("50%", 0.5);
			$('.image2').parallax("50%", 0.5);
			$('.image3').parallax("50%", 0.5);
			$('.image4').parallax("50%", 0.5);
			$('.parallax').parallax("-50%", 0.3);
			$('.parallax1').parallax("50%", 0.5);
			$('.parallax2').parallax("50%", 0.5);
			$('.parallax3').parallax("50%", 0.5);
			$('.parallax4').parallax("50%", 0.5);
			$('.parallax5').parallax("50%", 0.5);
			$('.parallax6').parallax("50%", 0.5);
		}
	}	
	parallaxInit();	 
});	
//Mobile Detect
var testMobile;
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
}( jQuery ));


/* ==============================================
Slap Text for Typography
=============================================== */	

  // Function to slabtext the H1 headings
    function slabTextHeadlines() {
        $(".typographic h1, .typographic h2").slabText({
            // Don't slabtext the headers if the viewport is under 380px
            "viewportBreakpoint":300
        });
    };
    
    // Called one second after the onload event for the demo (as I'm hacking the
    // fontface load event a bit here)

    // Please do not do this in a production environment - you should really use
    // google WebFont loader events (or something similar) for better control
    $(window).load(function() {
        // So, to recap... don't actually do this, it's nasty!
        setTimeout(slabTextHeadlines, 1000);
    });

 /* ==============================================
Our Works / isotope Scripts
===============================================	*/

       $(window).load(function() {
       	'use strict';
	      
	      var $container = $('.portfolio-items');

			$container.isotope({
				resizable: false, 
				//masonry: { columnWidth: $container.width() / 5 },
				itemSelector : '.work'
			});


	      
	      var $optionSets = $('#options .option-set'),
	          $optionLinks = $optionSets.find('a');

	      $optionLinks.click(function(){
	        var $this = $(this);
	        // don't proceed if already selected
	        if ( $this.hasClass('selected') ) {
	          return false;
	        }
	        var $optionSet = $this.parents('.option-set');
	        $optionSet.find('.selected').removeClass('selected');
	        $this.addClass('selected');
	  
	        // make option object dynamically, i.e. { filter: '.my-filter-class' }
	        var options = {},
	            key = $optionSet.attr('data-option-key'),
	            value = $this.attr('data-option-value');
	        // parse 'false' as false boolean
	        value = value === 'false' ? false : value;
	        options[ key ] = value;
	        if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
	          // changes in layout modes need extra logic
	          changeLayoutMode( $this, options )
	        } else {
	          // otherwise, apply new options
	          $container.isotope( options );
	        }
	        
	        return false;
	      });

		  
	      //expander
		  var loader = $('.item-expander');
		if(typeof loader.html() == 'undefined'){
			$('<div class="item-expander"><div id="item-expander" class="container clearfix relative"><p class="cls-btn"><a class="close">X</a></p><div/></div></div>').css({opacity:0}).hide().insertAfter('.portfolio');
			loader = $('.item-expander');
		}
		$('.expander').on('click', function(e){
			e.preventDefault();
			e.stopPropagation();
			var url = $(this).attr('href');



			loader.slideUp(function(){
				$.get(url, function(data){
					var portfolioContainer = $('.portfolio');
					var topPosition = portfolioContainer.offset().top;
					var bottomPosition = topPosition + portfolioContainer.height();
					$('html,body').delay(600).animate({ scrollTop: bottomPosition - -10}, 800);
					var container = $('#item-expander>div', loader);
					
					container.html(data);
					 $(".fit-vids").fitVids();
					$('.project').flexslider({
				        animation: "fade",
						selector: ".project-slides .slide",
						controlNav: true,
						directionNav: true ,
						slideshowSpeed: 5000,  
				      });
					
				//	 container.fitVids();
					loader.slideDown(function(){
						if(typeof keepVideoRatio == 'function'){
							keepVideoRatio('.project-video > iframe');
						}
					}).delay(1000).animate({opacity:1}, 200);
				});
			});
		});
		
		$('.close', loader).on('click', function(){
			loader.delay(300).slideUp(function(){
				var container = $('#item-expander>div', loader);
				container.html('');
				$(this).css({opacity:0});
				
			});
			var portfolioContainer = $('.portfolio');
				var topPosition = portfolioContainer.offset().top;
				$('html,body').delay(0).animate({ scrollTop: topPosition - 70}, 500);
		});

});


/* ==============================================
Animated Items
=============================================== */	
	jQuery(document).ready(function($) {
	
	'use strict';

    	$('.animated').appear(function() {
	        var elem = $(this);
	        var animation = elem.data('animation');
	        if ( !elem.hasClass('visible') ) {
	        	var animationDelay = elem.data('animation-delay');
	            if ( animationDelay ) {

	                setTimeout(function(){
	                    elem.addClass( animation + " visible" );
	                }, animationDelay);

	            } else {
	                elem.addClass( animation + " visible" );
	            }
	        }
	    });
});



 /* ==============================================
Count Factors
 =============================================== */	
  

		jQuery(function() {

				$(".fact-number").appear(function(){
				$('.fact-number').each(function(){
	        	dataperc = $(this).attr('data-perc'),
				$(this).find('.factor').delay(6000).countTo({
	            from: 50,
	            to: dataperc,
	            speed: 3000,
	            refreshInterval: 50,
	            
        	});  
		});
					});
});
 
(function($) {
    $.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;

        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));

                if (typeof(options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;

                    if (typeof(options.onComplete) == 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0,  // the number the element should start at
        to: 100,  // the number the element should end at
        speed: 1000,  // how long it should take to count between the target numbers
        refreshInterval: 100,  // how often the element should be updated
        decimals: 0,  // the number of decimal places to show
        onUpdate: null,  // callback method for every time the element is updated,
        onComplete: null,  // callback method for when the element finishes updating
    };
})(jQuery);





/* ==============================================
Video Script
=============================================== */

jQuery(function(){
			'use strict';

            jQuery(".player").mb_YTPlayer();
		});	
	



 /* ==============================================
Contact Form
=============================================== */	

$(document).ready(function() {
		'use strict';
		
		$('form#contact-us').submit(function() {
			$('form#contact-us .error').remove();
			var hasError = false;
			$('.requiredField').each(function() {
				if($.trim($(this).val()) == '') {
					var labelText = $(this).prev('label').text();
					$(this).parent().append('<span class="error">Your forgot to enter your '+labelText+'.</span>');
					$(this).addClass('inputError');
					hasError = true;
				} else if($(this).hasClass('email')) {
					var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
					if(!emailReg.test($.trim($(this).val()))) {
						var labelText = $(this).prev('label').text();
						$(this).parent().append('<span class="error">Sorry! You\'ve entered an invalid '+labelText+'.</span>');
						$(this).addClass('inputError');
						hasError = true;
					}
				}
			});
			if(!hasError) {
				var formInput = $(this).serialize();
				$.post($(this).attr('action'),formInput, function(data){
					$('.mail-message').removeClass('not-visible-message').addClass('visible-message');
					return false;
				});
			}
			
			return false;	
		});
	});






/* ==============================================
Google Map
=============================================== */

$(document).ready(function() {
			'use strict';

			//Google Map Open&Close Effect
			$( ".google-map-big-button" ).click(function(){
				$( "#map-button" ).toggleClass( "close-map-button", "open-map-button", 1000 );
				$( "#map-button" ).toggleClass( "open-map-button", "close-map-button", 1000 );
				$( "#map" ).toggleClass( "close-map", "open-map", 1000 );
				$( "#map" ).toggleClass( "open-map", "close-map", 1000 );
				return false;
			});

			// Map Coordination

			var latlng = new google.maps.LatLng(37.748944,-172.848367);

			// Map Options
			var myOptions = {
				zoom: 3,
				center: latlng,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				disableDefaultUI: true,
				scrollwheel: true,

				zoomControl: true,
				styles: [
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#c4c4c4"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#1ed2ff"
            },
            {
                "lightness": "0"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#e5c163"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#1ed2ff"
            }
        ]
    },
    {
        "featureType": "road.highway.controlled_access",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#1ed2ff"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#252525"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#2c2c2c"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#1ed2ff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#999999"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    }
]
			};

			var map = new google.maps.Map(document.getElementById('google-map'), myOptions);
			var infowindow = null;


			// Marker Image
			var seattleMarker = '/MJT/images/maps/seattle-Atom.png';
			var nyMarker = '/MJT/images/maps/nyc-Atom.png';
			var sfMarker = '/MJT/images/maps/sf-Atom.png';
			var shanghaiMarker = '/MJT/images/maps/shanghai-Atom.png';
			
		  	/* ========= First Marker ========= */

		  	// First Marker Coordination
			
			var myLatlng = new google.maps.LatLng(37.792922,-122.404737);

			map.addListener('drag', function() {
          // 3 seconds after the center of the map has changed, pan back to the
          // marker.
          window.setTimeout(function() {

          	map.setZoom(3);
          	if (infowindow) {
        		infowindow.close();
    		}
    		infowindow = new google.maps.InfoWindow();
           map.setCenter(latlng);
          }, 1000);
        });

			// Your Texts 

			 var contentString = '<div id="content">'+
			  '<div id="siteNotice">'+
			  '</div>'+
			  '<h4>' +

			  'San Francisco Office'+

			  '</h4>'+
			  '<p>' +

			  
			  '</p>'+
			  '</div>';
			

			var marker = new google.maps.Marker({
				  position: myLatlng,
				  map: map,
				  title: 'Hello World!',
				  icon: sfMarker
			  });


			

			  
			 google.maps.event.addListener(marker, 'click', function() {
			 	 infowindow = new google.maps.InfoWindow({
			  content: contentString
			  });
			 	 map.setZoom(14);
          map.setCenter(marker.getPosition());
				infowindow.open(map,marker);
			  });

			 /* ========= End First Marker ========= */




			 /* ========= Second Marker ========= */

			 // Second Marker Coordination

			 var myLatlngSecond = new google.maps.LatLng(40.755105,-73.986330);

			 // Your Texts

			 var contentStringSecond = '<div id="content">'+
			  '<div id="siteNotice">'+
			  '</div>'+
			  '<h4>' +

			  'New York Office'+

			  '</h4>'+
			  '<p>' +

			  

			  '</p>'+
			  '</div>';

			 

			 var markerSecond = new google.maps.Marker({
				  position: myLatlngSecond,
				  map: map,
				  title: 'Hello World!',
				  icon: nyMarker
			  });

			 google.maps.event.addListener(markerSecond, 'click', function() {
			 	  infowindow = new google.maps.InfoWindow({
				  content: contentStringSecond,
				  });
			 	map.setZoom(14);
          		map.setCenter(markerSecond.getPosition());
				infowindow.open(map,markerSecond);
				
			  });

			 /* ========= End Second Marker ========= */
			  /* ========= Second Marker ========= */

			 // Thurd Marker Coordination

			 var myLatlngThird = new google.maps.LatLng(47.577682,-122.173254);

			 // Your Texts

			 var contentStringThird = '<div id="content">'+
			  '<div id="siteNotice">'+
			  '</div>'+
			  '<h4>' +

			  'Seattle Office'+

			  '</h4>'+
			  '<p>' +

			 
			  '</p>'+
			  '</div>';

			  

			 var markerThird = new google.maps.Marker({
				  position: myLatlngThird,
				  map: map,
				  title: 'Hello World!',
				  icon: seattleMarker
			  });

			 google.maps.event.addListener(markerThird, 'click', function() {
			 	 infowindow = new google.maps.InfoWindow({
				  content: contentStringThird,
				  });
				map.setZoom(14);
          		map.setCenter(markerThird.getPosition());
				infowindow.open(map,markerThird);
			  });

			 /* ========= End Second Marker ========= */
		
		 /* ========= Second Marker ========= */

			 // Second Marker Coordination

			 var myLatlngFourth = new google.maps.LatLng(31.223519,121.4452840);

			 // Your Texts

			 var contentStringFourth = '<div id="content">'+
			  '<div id="siteNotice">'+
			  '</div>'+
			  '<h4>' +

			  'Shanghai Office'+

			  '</h4>'+
			  '<p>' +

			   

			  '</p>'+
			  '</div>';

			 

			 var markerFourth = new google.maps.Marker({
				  position: myLatlngFourth,
				  map: map,
				  title: 'Hello World!',
				  icon: shanghaiMarker
			  });

			 google.maps.event.addListener(markerFourth, 'click', function() {
			 	  infowindow = new google.maps.InfoWindow({
				  content: contentStringFourth,
				  });
				map.setZoom(14);
          		map.setCenter(markerFourth.getPosition());
				infowindow.open(map,markerFourth);
			  });

			 /* ========= End Second Marker ========= */
		
		
		})


