$(document).on("click", 'div.left ul a', function() {
	var deleteImg = '<a href="#" class="rightAlignment none"><img src="img/ic_close_18px@1x.png" alt="delete" />';
	var editImg = '<a href="#" class="rightAlignment"><img src="img/ic_edit_lightblue_15px@1x.png" alt="edit" /></a>';
	$("div.right ul").append($(this).parent());
	$("div.right ul li:last-child a").remove();
	$("div.right ul li:last-child").append(editImg, deleteImg);
});