define(["jquery"], function($) {

  $('#technologies').click(function () {
    $('#techPage').show('slow');
    $('#homePage').hide();
    $('#bioPage').hide();
    $('#projectsPage').hide();
    $('#contactPage').hide();
    console.log("Hello World! ");
  });

  $('#home').click(function () {
    $('#homePage').show('slow');
    $('#techPage').hide();
    $('#bioPage').hide();
    $('#projectsPage').hide();
    $('#contactPage').hide();
    console.log("Hello World! ");
  });

  $('#bio').click(function () {
    $('#bioPage').show('slow');
    $('#homePage').hide();
    $('#techPage').hide();
    $('#projectsPage').hide();
    $('#contactPage').hide();
    console.log("Hello World! ");
  });

  $('#projects').click(function () {
    $('#projectsPage').show('slow');
    $('#contactPage').hide();
    $('#homePage').hide();
    $('#bioPage').hide();
    $('#techPage').hide();
    console.log("Hello World! ");
  });

  $('#contact').click(function () {
    $('#contactPage').show('slow');
    $('#projectsPage').hide();
    $('#homePage').hide();
    $('#bioPage').hide();
    $('#techPage').hide();
    console.log("Hello World! ");
  });

// Create the dropdown base
  $("#dropNav").appendTo("nav");

  // Create default option "Go to..."
  $("<option />", {
     "selected": "selected",
     "value"   : "",
     "text"    : "Go to..."
  }).appendTo("nav select");

  // Populate dropdown with menu items
  $("nav a").each(function() {
    var el = $(this);
    $("<option />", {
       "value"   : el.attr("href"),
       "text"    : el.text()
     }).appendTo("nav select");
  });

  $("nav select").change(function() {
    window.location = $(this).find("option:selected").val();
  });

});
