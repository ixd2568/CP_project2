//Converts target into a scroll-to-top link
$.fn.backToTop = function()
{
	var footer = this;
	
	//place it within the content div
	footer.css("right", ($(window).width() - 960)/2);
	
	$(window).scroll(function()
	{
		//display the footer when the user scrolls down
		if ($(this).scrollTop()) footer.fadeIn();
		//hide when at the top
		else footer.fadeOut();
	});

	footer.click(function()
	{
		//courtesy of StackOverflow; this works in all browsers, apparently
		$("html, body").animate({scrollTop: 0}, 400);
	});
}