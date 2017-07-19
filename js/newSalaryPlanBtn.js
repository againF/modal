$(document).on("click", '#newSalaryPlan', function() {
	var addArrowShapeImg = '<a href="#" class="rightAlignment"><img src="img/ic_add_arrowshape_15px@1x.png" alt="select" /></a>';
	$("div.left ul").append("<input class='newPlan' />");
	$(".newPlan").blur(function() {
		$("div.left ul").append($('<li>', {
			text: $('.newPlan').val()
		}));
		$(".newPlan").remove();
		$("div.left li:last-child").append(addArrowShapeImg);
	});
})