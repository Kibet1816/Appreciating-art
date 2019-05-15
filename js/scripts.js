$(document).ready(function(){
<<<<<<< HEAD
  $(".test").hide()
  $("#btn").click(function(){
=======
  $(".test").hide();
  $(".bt").click(function(){
>>>>>>> 1bcbe6b8c0f1d7d973f2ab2bc4502c4de7b62a53
    $("#tru").slideToggle(550);
  });
  $("#gal").click(function(){
    $(".test").slideToggle(1250);
  });
});
<<<<<<< HEAD
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
=======

>>>>>>> 1bcbe6b8c0f1d7d973f2ab2bc4502c4de7b62a53
