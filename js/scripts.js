$(document).ready(function(){
  $(".test").hide();
  $(".bt").click(function(){
    $("#tru").slideToggle(550);
  });
  $("#gal").click(function(){
    $(".test").slideToggle(1250);
  });
});

