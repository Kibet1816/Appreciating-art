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
    setTimeout(function(){
      $("body,html").removeClass("no-scroll")
      $(".loader-ctn").fadeOut();
    },4000);
  });
  $("#gal2").click(function(){
    $(".more-graph").slideToggle();
  });

