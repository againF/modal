$("tbody input:checkbox").click(function() {
	var len = $("tbody input:checkbox:checked").length;
	$("#showIncumbentNum").html(len);
	if(len == 10) {
		$("#checkAll").prop("checked", true);
	} else {
		$("#checkAll").prop("checked", false);
	}
});