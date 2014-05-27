$(document).ready(function() {


  // Responsive Menu.js
  		$('#nav-wrap').prepend('<div id="menu-icon"><span><img src="img/hamburger@2x.png"/></span>Menu</div>');
  		$("#menu-icon").on("click", function(){
  			$("#nav").slideToggle('medium', function() {
  			    if ($('#nav').is(':visible'))
  			        $('#nav').css('display','block');
  			    if ($('#nav').is(':hidden'))
  			        $('#nav').css('display','');    
  			});
  			
  			$(this).toggleClass("active");
  		});
  	
  	
  // Parent-Nav Hover	
  	$("li.nav-parent").hover(function(){
  		$(this).addClass("hover");
  	
  	}, function(){
  	    $(this).removeClass("hover");
  	});
  	
  	
  
  // FitVid.js
     $(".main-container").fitVids();
   
 
     
  // Fix Widows
  	 $('p').widowFix();   
 
 
 
  // Fancybox.js
	 $('.fancybox').fancybox();
	  
  
  
  // BackStretch.js	 
	 $("#masthead").backstretch("img/slides/1.jpg");
	 
	 
	 
  // Mosaic.js		 
	 $('.fade').mosaic();
	 
	 
  // Superslides.js		 
	 $('#slides').superslides({
	     play: true,
	     slide_easing: 'easeInOutCubic',
	     hashchange: true,
	     scrollable: true,
	     slide_speed: 800,
	     delay: 60500,
	     pagination: true
	 });
	 $('#slides').on('dragstart', function (event) {
	     event.preventDefault();
	     switch(event.direction){
	         case "left":
	             $('#slides').superslides.api.next();
	             break;
	         case "right":
	             $('#slides').superslides.api.prev();
	             break;
	     };
	    
	 });
	 
	 
  
  // FlexSlider.js	 
	 $('.flexslider').flexslider({
	   animation: "fade",
	   smoothHeight: true,
	   touch: true,
	   prevText: "S",
	   nextText: "s",
	   start: function(slider){
	     $('body').removeClass('loading');
	   }
	 });
	 
	 $('.flexslider-quote').flexslider({
	   animation: "fade",
	   smoothHeight: true,
	   touch: true,
	   directionNav: false,
	   start: function(slider){
	     $('body').removeClass('loading');
	   }
	 });	 
	 
	 
	 
	// Isotope.js	 
	var $container = $('#thumb-gallery');
	  
	    $container.isotope({
	      masonry: {
	        columnWidth: 1 //was 26
	      },
	      sortBy: 'number',
	      getSortData: {
	        number: function( $elem ) {
	          var number = $elem.hasClass('element') ? 
	            $elem.find('.number').text() :
	            $elem.attr('data-number');
	          return parseInt( number, 10 );
	        },
	        alphabetical: function( $elem ) {
	          var name = $elem.find('.name'),
	              itemText = name.length ? name : $elem;
	          return itemText.text();
	        }
	      }
	    });
	     
	       
	var $optionSets = $('.meta.option-set'),
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
	 
});


