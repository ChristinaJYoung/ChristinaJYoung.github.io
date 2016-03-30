define(["jquery"], function($) {

  $('#technologies').click(function () {
    $('#techPage').show('slow');
    $('#homePage').hide();
    $('#projectsPage').hide();
    $('#bioPage').hide();
    console.log("Hello World! ");
  });

  $('#home').click(function () {
    $('#homePage').show('slow');
    $('#techPage').hide();
    $('#projectsPage').hide();
    $('#bioPage').hide();
    console.log("Hello World! ");
  });

  $('#bio').click(function () {
    $('#bioPage').show('slow');
    $('#homePage').hide();
    $('#projectsPage').hide();
    $('#techPage').hide();
    console.log("Hello World! ");
  });

  $('#projects').click(function () {
    $('#projectsPage').show('slow');
    $('#homePage').hide();
    $('#bioPage').hide();
    $('#techPage').hide();
    console.log("Hello World! ");
  });

});
