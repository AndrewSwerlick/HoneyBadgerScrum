$(document).ready(function() {
	$('#nav-list').html(
		"<li><a href='index.html'>Home</a></li>" +
		"<li><a href='behavior.html'>Behavior</a></li>" +
		"<li><a href='habitat.html'>Habitat</a></li>" +
		"<li><a href='communication.html'>Communication</a></li>" +
		"<li><a href='facts.html'>Facts</a></li>" +
		"<li><a href='popculture.html'>Pop Culture</a></li>" +
		"<li><a href='classification.html'>Classification</a></li>" +
		"<li><a href='mating.html'>Mating</a></li>" +
		"<li><a href='diet.html'>Diet</a></li>" +
		"<li><a href='gallery.html'>Image Gallery</a></li>"
	);

	function qualifyURL(url) {
	    var a = $('<a></a>');
	    a.attr("href", url);
	    return a[0].href;
	}
	var currentUrl = window.location.href.split('?')[0];

	$("#nav-list li").each(function (index, item) {
	    var url = $(item).find("a").attr("href");
	    var fullUrl = qualifyURL(url);
	    if (currentUrl.indexOf(fullUrl) != -1)
	        $(item).addClass("active");
	});

});