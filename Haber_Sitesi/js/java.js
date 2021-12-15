$(function(){
    $("#hava").fadeIn(2000);
	$.il = function(){
		var il = $("#il").val();
		$("#hava").attr("src","http://widget.mynet.com/static/havadurumu/widget.html?city="+il).fadeIn(2000);
	}
});