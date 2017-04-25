$(document).ready(function() {
  $(".clickable-walrus").click(function() {
    $("#hide-me").slideToggle();
    $("#show-me").slideToggle();
  });
  $(".clickable").click(function() {
    $("#fun-facts").slideToggle();
  });

  $("button#lights-on").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });
  $("button#lights-off").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });

  $(".clickable-history").click(function() {
    $("#history-box").toggle();
    $("#history-box-border").toggle();
  });

});
