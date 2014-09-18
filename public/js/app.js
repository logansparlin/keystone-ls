var $container = $('#container');

$(document).ready( function() {
	$('.item').css("opacity", "0");
}) 
// layout Masonry again after all images have loaded
$container.imagesLoaded( function() {
	$('.item').each( function(i) {
		$(this).delay((i++) * 50).fadeTo(250, 1);
	});
  	$container.masonry({
  		itemSelector: '.item',
  		columnWidth: 1
  	});
});

$(document).ready( function() {
	$('img.item').click(function() {
		$(this).toggleClass('item');
		$('img.item').removeClass('large');
		$(this).toggleClass('large')
	})
})