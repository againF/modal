$("#addAll").on("click", function addAll() {
	var deleteImg = '<a href="#" class="rightAlignment none"><img src="img/ic_close_18px@1x.png" alt="delete" />';
	var editImg = '<a href="#" class="rightAlignment"><img src="img/ic_edit_lightblue_15px@1x.png" alt="edit" /></a>';
	$("div.right ul").append($("div.left ul li"));
	$("div.right ul a").remove();
	$("div.right ul li").append(editImg, deleteImg);
});