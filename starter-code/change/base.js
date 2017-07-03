console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

  $("input.add").on("change", function sum(event){
  	var sum = parseInt($("input#left").val()) + parseInt($("input#right").val());
  	$("#total").val(sum);
  });

});
