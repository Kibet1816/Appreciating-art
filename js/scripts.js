$(document).ready(function(event){
  // event.preventDefault();
  $("#btn").click(function(){
    event.preventDefault();
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