$(document).ready(function() {
  $(".clickable-walrus").click(function() {
    $("#hide-me").slideToggle();
    $("#show-me").slideToggle();
  });
  $(".clickable").click(function() {
    $("#fun-facts").slideToggle();
  });
});
