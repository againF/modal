$("#removeAll").on("click", function removeAll() {
	var addArrowShapeImg = '<a href="#" class="rightAlignment"><img src="img/ic_add_arrowshape_15px@1x.png" alt="select" /></a>';
	$("div.left ul ").append($("div.right ul li"));
	$("div.left ul a").remove();
	$("div.left ul li").append(addArrowShapeImg);
});