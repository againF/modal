$(document).on("click", 'div.right li a:first-child', function() {
	$(this).siblings().removeClass("none");
});