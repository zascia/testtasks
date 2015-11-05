/**
 * Created by zascia on 05.11.2015.
 */
define(['jquery', 'modernizr', 'pie'], function ($, Modernizr, pie) {
  var fixIE = function() {
    if ( !Modernizr.borderradius || !Modernizr.boxshadow ) {
      require(['pie'], function(){
        $('.info-box, .info-box-buy a').each(function() {
          PIE.attach(this);
        });
      });
    }
  }

  return fixIE;
});