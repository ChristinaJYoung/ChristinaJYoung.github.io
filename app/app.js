define(["jquery"], function($) {

  $('#technologies').click(function () {
    $('#techPage').show('slow');
    $('#homePage').hide();
    $('#bioPage').hide();
    $('#projectsPage').hide();
    $('#contactPage').hide('slow');
    console.log("Hello World! ");
  });

  $('#home').click(function () {
    $('#homePage').show('slow');
    $('#techPage').hide();
    $('#bioPage').hide();
    $('#projectsPage').hide();
    $('#contactPage').hide('slow');
    console.log("Hello World! ");
  });

  $('#bio').click(function () {
    $('#bioPage').show('slow');
    $('#homePage').hide();
    $('#techPage').hide();
    $('#projectsPage').hide();
    $('#contactPage').hide('slow');
    console.log("Hello World! ");
  });

  $('#projects').click(function () {
    $('#projectsPage').show('slow');
    $('#contactPage').hide('slow');
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


});
