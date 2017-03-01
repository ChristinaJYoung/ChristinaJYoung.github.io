
requirejs.config({
  baseUrl: "./app",
  paths:{
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
    "lodash": "../lib/bower_components/lodash/lodash.min",
  },
  shim : {
        "bootstrap" : { "deps" :['jquery'] },
    }
});

requirejs(

  ["app"],

  function(app) {
    console.log("Hello World");

});//end of require
