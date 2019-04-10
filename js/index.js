class StickyNavigation {
	
	constructor() {
		this.currentId = null;
		this.currentTab = null;
		this.tabContainerHeight = 70; /* Because .et-hero-tabs-container has height: 70px */
		let self = this;
/* Because the code revolves around /et-hero-tab */
		$('.et-hero-tab').click(function() { 
			self.onTabClick(event, $(this)); 
		});
		$(window).scroll(() => { this.onScroll(); });
		$(window).resize(() => { this.onResize(); });
	}
	
/* event is onTabClick and element is et-hero-tab */
	onTabClick(event, element) {
		event.preventDefault();
/*  The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.   */

/* Based on the tab that is clicked, one of the attributes of 'href' corresponding to the tab click will be picked from the element et-hero-tab. */

		let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
 /* alert("this is Scroll value "+$(element.attr('href')).offset().top); 
 Value of is $(element.attr('href')).offset().top) for first tab is 984 , tabContainerHeight is 70
Thus scrollTop  for first tab is 984-70+1 = 915 */

		$('html, body').animate({ scrollTop: scrollTop }, 600);
	}
	 
/* when user scrolls, these functions are called */
	onScroll() {
		this.checkTabContainerPosition();
    this.findCurrentTabSelector();
	}
	 /* Basic development of responsiveness */
	onResize() {
		if(this.currentId) {
			this.setSliderCss();
		}
	}
	/* Sees the position of page. */
	checkTabContainerPosition() {
		let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
/* alert("$('.et-hero-tabs').height() = "+$('.et-hero-tabs').height()+" Offset value = "+offset) 
$('.et-hero-tabs').height() = 984 and offset = 914, scrollTop = 915 */

		if($(window).scrollTop() > offset) {
			$('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
/* Sets our navbar to the top,since we are not at the first page */
		} 
		else {
			$('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
/* Sets our navbar to the bottom and removes class "et-hero-tabs-container--top ",since we are at the first page */
		}
	}
	
/* How to find the currently selected tab */

	findCurrentTabSelector(element) {
		let newCurrentId;
		let newCurrentTab;
		let self = this;
		$('.et-hero-tab').each(function() {       
            /* jQuery’s each() function is used to loop through each element of the target jQuery object.Performs tasks to each of the links inside the .each(function {}) ,ie It specifies a function to run for each matched element, here matched element is the tab (.et-hero-tab)  */

			let id = $(this).attr('href');           /* retrieves the value of href value of the FIRST matched element (which is why .each() is used) attribute and gives it to ID. ID will be $(.et-hero-tab).attr('href') which is #tab-es6 and all of them according to the loop .each() .*/

			let offsetTop = $(id).offset().top - self.tabContainerHeight;



/*  $(id).height() = 984 (id = #tab-es6,and rest others on loop)*/
			let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight; 


			if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {

/* scrollTop() method sets the vertical scrollbar position for the selected elements 
(the window ,here). Observe by scrolling to a new section, the slider in nav bar slides to the tab of the section scrolled to. Thus after calculations,it sets new ID and new TAB.These values are use to set our currentID ,currentTab and thereby also help us get our slider there.  */
                
				newCurrentId = id;
				newCurrentTab = $(this);
/* alert("offsetTop value = "+offsetTop+" ScrollTop value ="+$(window).scrollTop()+" offsetBottom value = "+offsetBottom+ " Container height = "+self.tabContainerHeight ); <----- Shows how the value always somehow works...*/
 /* alert("height"+$(id).height()); */
			}

		}

);
		if(this.currentId != newCurrentId || this.currentId === null) {
/* After interpretation of the if loop, newCurrentId and
newCurrentTab values are fed to currentId and currentTab, respectively and then setSliderCSS is called. setSliderCSS then gets the slider to the active currentTab (which is the value of newCurrentTab) */
			this.currentId = newCurrentId;
			this.currentTab = newCurrentTab;
			this.setSliderCss();
		}
	}
	
    /* the blue slider */
	setSliderCss() {
		let width = 0; 
		let left = 0;
		if(this.currentTab) {
			width = this.currentTab.css('width'); /* reads the width of the current tab to form the blue slider with the help of flex property and assigns to width */
			left = this.currentTab.offset().left; /* The offset() method set or returns the offset coordinates for the selected elements (here the currentTab flex bar), relative to the document (here it returns the coordinate) */
		}
		$('.et-hero-tab-slider').css('width', width); /* the css() method sets width for the slider on the current tab that we got from the width mentioned above*/
		$('.et-hero-tab-slider').css('left', left);   /* Sets the position left of the slider ,thus moves the slider to the current tab */
	}
	
}

new StickyNavigation();

/* Our contact form */
$(function() {
  
  // contact form animations
  $('#contact').click(function() {
    $('#contactForm').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $("#contactForm");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });
  
});

$('.angle-up').click(function() {
  var overlay = $('#overlay');
  var featured = $('#featured');
  if ($(this).hasClass('active')) {
    $(this).removeClass('active');
    overlay.fadeOut(300);
    featured.animate({
      'height': '0px'
    }, 300);
  } else {
      $(this).addClass('active');
      overlay.fadeIn(300);
      if (window.matchMedia('(max-width: 768px)').matches) {
		/* Changes when we reach the min-width  */
      featured.animate({
      'height': '700px'
    }, 300);

		} else {
		/* Reset for CSS changes – Still need a better way to do this! */
     featured.animate({
      'height': '400px'
    }, 300);
		}
   
    
    
  }
});


 
  
  //Ask for HTML5 geolocation, use Modernizr to detect if we can even do it. If allow, go to show_map, if deny go to handle_error. Please note the High Accuracy flag, which may cause the location fix to take longer, but it gives a more precise reading
   function get_location() {
     if (Modernizr.geolocation) {
       navigator.geolocation.getCurrentPosition(show_map, handle_error, {maximumAge: 75000, enableHighAccuracy: true});
       console.log('We have location support!');
     } else {
       console.error('No HTML5 Geolocation support! Unable to divine current location!');
     }
   }
   
   //Handle errors
   function handle_error(err) {
     if (err.code == 1) {
       console.error('HTML5 Geolocation Error: Permission denied (code 1)');
     }
     if (err.code == 0) {
       console.error('HTML5 Geolocation Error: Unknown error (code 0)');
     }
     if (err.code == 2) {
       console.error('HTML5 Geolocation Error: Position unavailable. Network is down or positioning satellites can\'t be contacted! (code 2)');
     }
     if (err.code == 3) {
       console.error('HTML5 Geolocation Error: Timed out (code 3)');
     }
     var my_address = "Andheri,Mumbai,Maharashtra 400053";
window.open('http://maps.google.com/maps?daddr='+encodeURIComponent(my_address));
    // window.location = 'http://maps.google.com/maps?daddr='+encodeURIComponent(my_address);
   }
   
   function show_map(position) {
     console.log('Sending to Google Maps');
     var latitude = position.coords.latitude;
     var longitude = position.coords.longitude;
     var my_address = "Andheri,Mumbai,Maharashtra 400053";
window.open('http://maps.google.com/maps?saddr='+latitude+', '+longitude+'&daddr='+encodeURIComponent(my_address));
     //window.location = 'http://maps.google.com/maps?saddr='+latitude+', '+longitude+'&daddr='+encodeURIComponent(my_address);
   }
  
$('.slide-nav1').on('click', function(e) {
  e.preventDefault();
  // get current slide
  var current = $('.flex--active').data('slide'),
    // get button data-slide
    next = $(this).data('slide');

  $('.slide-nav1').removeClass('active');
  $(this).addClass('active');

  if (current === next) {
    return false;
  } else {
    $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
    $('.flex--active').addClass('animate--end');
    setTimeout(function() {
      $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
      $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
    }, 800);
  }
});