console.log("Sanity Check: JS is working!");

$(document).ready(function(){
	$("span").on("click", function listClicked(event){
		var text = $(this).text() + " at " + Date.now();
		$("ul").append("<li>" + text + "</li>");
	});

});
