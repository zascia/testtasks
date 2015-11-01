/**
 * Created by ashu on 30-Oct-15.
 */

requirejs.config({
  baseUrl: 'js',
  paths: {
    infoBox: '../js/modules/infoBox',
    underscore: '../js/lib/underscore-min',
    jquery: '../js/lib/jquery.min'
  }
});

define(['require', 'domReady'], function(require, domReady) {
  domReady(function() {
    require(['./main'], function(app) {
      //app.initialize();
    });
  });
});
