//problem: user when clicking on image goes to a dead end
//solution: create an overlay with the large image - lightbox
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");
//an image
$overlay.append($image);
//a caption
$overlay.append($caption);
//add overlay
$("body").append($overlay);
//1. capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
    //update overlay with the image linked in the link
  $image.attr("src", imageLocation);
  //1.1 show the overlay.
  $overlay.show();
  //1.3 get child's alt att and set caption
  var captiontext = $(this).children("img").attr("alt");
  $caption.text(captiontext);
});

//3. when overlay is clicked
$overlay.click(function(){
  $overlay.hide();
});
  //3.1 hide the overlay
