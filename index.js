
$(document).on("click", "#go", function(){
  var rover= $( "input:radio[name=roverradio]:checked" ).val();
  var camera = $( "input:radio[name=roverCU]:checked" ).val();
  var cameraO = $( "input:radio[name=roverOP]:checked" ).val();
  var sol= $("#solBox").val();


var hello = $.ajax({
  url: "https://api.nasa.gov/mars-photos/api/v1/rovers/"+rover+"/photos?sol="+sol+"&camera="+camera+"&api_key=IehMG0La2iacI4ov3PIvkEACDwvdcXYSdb4CcqE6",
  method: "GET",
  dataType: "JSON"

})

hello.done(function(data){

var x = data["photos"];
for (var i = 0; i < x.length; i++) {
  var y = x[i]["img_src"]
$(".resultsHolder").append("<img class='apiResults'src='"+y+"'/>")
$(".instructo").hide();
$(".suggestedSol").hide();
}



});

hello.fail(function(data){

  alert("Enter a different SOL . As of 12/1715: Curiosity Current Sol: 1187, Spirit Max Sol: 2210, Opportunity Current Sol: 4221")
})

$("#photo").css('cursor', 'none');
$(".resultsHolder").empty();
// ("<img src='"+data["photos"][2]["img_src"]+"'/>")
})
$("#launchSpot").click(function(){
  $(".spotify").show();
})

$("#explorePhotos").click(function() {
    $('html, body').animate({
        scrollTop: $(".photoViewer").offset().top
    }, 2000);
});
$(document).on('click','.apiResults', function(){

  $('.photoOutput').empty();
  $(this).clone().appendTo('.photoOutput').attr('id', 'finalPhoto');
});

$(document).on("change","#cRad", function() {
   $(".cuR").show();

});
$(document).on("change","#oRad", function() {

   $(".cuR").show();

});
$(document).on("change","#sRad", function() {

   $(".cuR").show();

});
