//problem: it looks gross in small browser widths and devices;
//solution: to hide the text links and swap them out with a more appropriate navigation

//create a select and append to #menu
var $select = $("<select></select>");
$("#menu").append($select);
//cycle over menu links
$("#menu a").each(function(){
  var $anchor = $(this);
  //create an option
  var $option = $("<option></option>");

  //deal with selected options depending on current page
  if ($anchor.parent().hasClass("selected")){
    $option.prop("selected", true);
  }

  //option's value is the href
  $option.val($anchor.attr("href"));
  //option's text is the text of link
  $option.text($anchor.text());
  //append option to select
  $select.append($option);
});
  //bind change listener to the selec
  $select.change(function () {
    // to go to select's location
    window.location = $select.val();
  });
