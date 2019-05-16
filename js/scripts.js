$(document).ready(function(){
  $("#btn").click(function(){
    $("#tru").slideToggle(550);
  });
  $("#gal").click(function(){
    $(".test").slideToggle(1250);
  });
  $(document).ready(function(){
    setTimeout(function(){
      $("body,html").removeClass("no-scroll")
      $(".loader-ctn").fadeOut();
    },4000);
  });
  
});