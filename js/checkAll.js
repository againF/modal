$(document).on("click", '#checkAll', function() {
	if($(this).prop("checked")) {
		$("tbody input:checkbox").prop("checked", true);
		var len = $("tbody input:checkbox:checked").length;
		$("#showIncumbentNum").html(len);
	} else {
		$("tbody input:checkbox").prop("checked", false);
		var len = $("tbody input:checkbox:checked").length;
		$("#showIncumbentNum").html(len);
	}
});