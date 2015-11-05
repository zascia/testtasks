/**
 * Created by ashu on 30-Oct-15.
 */

requirejs.config({
  baseUrl: 'js',
  paths: {
    modernizr: '../js/lib/modernizr',
    pie: '../js/lib/PIE',
    underscore: '../js/lib/underscore-min',
    jquery: '../js/lib/jquery.min',
    infoBox: '../js/modules/infoBox',
    carousel: '../js/modules/carousel'
    // fixIE: '../js/modules/fixIE'
  }
});

define(['require', 'domReady'], function(require, domReady) {
  domReady(function() {
    require(['./main'], function(app) {
      //app.initialize();
    });
  });
});
