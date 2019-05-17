$(document).ready(function(){
  $(".test").hide();
  $(".clickable1").click(function(){
    $(".tru1 p").slideToggle(550);
  });
  $(".clickable2").click(function(){
    $(".tru2 p").slideToggle(550);
  });
  $(".clickable3").click(function(){
    $(".tru3 p").slideToggle(550);
  });
  $(".clickable4").click(function(){
    $(".tru4 p").slideToggle(550);
  });
  $("#gal").click(function(){
    $(".test").slideToggle(1250);
  });
  $("#gal2").click(function(){
    $(".other-designs").slideToggle();
  });
  $(".sculpture").click(function(){
    $("#getaways").hide();
    $("#paintings").hide();
    $("#graphic-Design").hide();
    $("#sculpture").animate({
      width:"show"
    });
  });
  $(".graphical").click(function(){
    $("#sculpture").hide();
    $("#getaways").hide();
    $("#paintings").hide();
    $("#graphic-Design").animate({
      width:"show"
    });
  });
  $(".paints").click(function(){
    $("#sculpture").hide();
    $("#graphic-Design").hide();
    $("#getaways").hide();
    $("#paintings").animate({
      width:"show"
    });
  });
  $(".visit-us").click(function(){
    $("#paintings").hide();
    $("#sculpture").hide();
    $("#graphic-Design").hide();
    $("#getaways").animate({
      width:"show"
    });
  });
  
});


