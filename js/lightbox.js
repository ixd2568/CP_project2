//Google Map Lightbox
$.fn.openLightbox = function(x, y)
{
	//Google Map API requires a DOM element instead of a jQuery one, so I had to use getElementById
	var map = new google.maps.Map(document.getElementById('gmap'), 
	{
		zoom: 13,
		center: new google.maps.LatLng(x, y),
		mapTypeId: google.maps.MapTypeId.ROADMAP
    });
	this.fadeIn();
	
	var lightbox = this;
	this.click(function() 
	{
		lightbox.fadeOut();
	}).children().click(function(e)
	{
		return false;
	});
}