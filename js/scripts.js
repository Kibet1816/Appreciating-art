<<<<<<< HEAD
$(document).ready(function() {
  $(".col-md-4").click(function() {
    $(this).children(".text-showing").toggle();
    $(this).children(".text-hidden").toggle();
  });
  $("#submit").click(function(event){
    var dataName =$("#name1").val();
    alert("Thank you" + dataName + "for reaching out to us");
    event.preventDefault();
  });
  $(".hover").fadeOut(500);
  $(".col-md-3").hover(function(){
    $(this).children(".hover").toggle(500);
  });
});
=======
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

>>>>>>> 82cc29b5faba03220ac1fced4491405f7a0eb4ca
