//modalOne's removeBtn
$(document).on("click", 'div.right li a:last-child', function() {
	var addArrowShapeImg = '<a href="#" class="rightAlignment"><img src="img/ic_add_arrowshape_15px@1x.png" alt="select" /></a>';
	$("div.left ul").append($(this).parent()); //li
	$("div.left li:last-child a").remove(); //remove img
	$("div.left li:last-child").append(addArrowShapeImg); //add img
});

//modalTwo's removeBtn
$(document).on("click", '.removeLink', function() {
	$(this).parent().parent().remove();
});