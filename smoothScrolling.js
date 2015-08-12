/* Smooth Scrolling */
$('a[href^="#"]').on('click',function (e) 
{	
		var timeAnchorScroll = 900; // animation time in ms 

	    e.preventDefault();

	    var target = this.hash;
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, timeAnchorScroll, 'swing', function () {
	        window.location.hash = target;
	    });
		
});
