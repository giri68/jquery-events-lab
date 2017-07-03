console.log("Sanity Check: JS is working!");
var startTime;
var endTime;

$(document).ready(function(){


 $(window).on("keypress", function spacebar(event){

    if ( startTime ) {
      endTime = Date.now();
      
      totalTime();
      
    } else {
      startTime = Date.now();
     
            
    }

  })

})

function totalTime(){
  var total = (endTime - startTime) / 1000;
  $("#total-time").text( total + " seconds" );
}
