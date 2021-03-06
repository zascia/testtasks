/**
 * Created by ashu on 29-Oct-15.
 */
define(['underscore', 'jquery', 'carousel'], function(_, $, Carousel) {

  var data = [
    {
      "title": "Time to Share: 6 for $3.99*",
      "img": "comp_plate_promo1.png",
      "description": "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
      "note": "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
      "productUrl": "/products/promo1.html"
    },
    {
      "title": "Rise 'n shine",
      "img": "comp_plate_promo2.png",
      "description": "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
      "note": "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
      "productUrl": "/products/promo2.html"
    },
    {
      "title": "PM Snackers: Brownie Bites",
      "img": "comp_plate_promo3.png",
      "description": "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
      "note": "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
      "productUrl": "/products/promo3.html"
    },
    {
      "title": "PM Snackers: Brownie Bites new",
      "img": "comp_plate_promo4.png",
      "description": "Lorem ipsum dolor sit amet. consectetur adipisicing elit, sed do eiusmod tempor incididunt ut la bore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exefcitalion ullamoo laboris nisi ut aliquip ex ea commodo oonsequat.",
      "note": "* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.�* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.\n* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.\n* At vero eos et accusamus et iusto odo dtgntsslmos duclmus qui blandltlis praesentlum voluptatum delenrtl atque corruptl quos doQres et quas molestlas exceptun sint occaecatl cupidrtate non pro v dent, slmllique sunt In culpa qui otflcia deserunt mollrtia anlmi. id est la bo aim et dolorum tuga.",
      "productUrl": "/products/promo4.html"
    }
  ];

  var compiled = _.template('<% _.each(content, function(item, key, list) { %> <div class="info-box"><div class="info-box-image"><img src="src/img/<%= item.img %>" alt="" /></div><div class="info-box-content"><h2><%= item.title+key %></h2><p class="info-box-description"><%= item.description %></p><div class="info-box-details"><p><%= item.note %></p></div><p class="more-link-container"><a class="more-link show-details" href="#" title="more details">show details</a><a class="more-link hide-details" href="#" title="hide details">hide details</a></p></div><ul class="controls info-box-controls"><li class="controls-item info-box-nav"><a href="#" class="nav-link nav-prev <% if (key === 0) { %>nav-last<% }; %>" title=""><span class="nav-ico info-boxbtn-ic-gray-left"></span><span class="nav-btn">Prev</span></a><a href="#" class="nav-link nav-next <% if (key === (list.length-1)) { %>nav-last<% }; %>" title=""><span class="nav-btn info-boxbutton-bg-white-right">Next</span><span class="nav-ico info-boxbtn-ic-gray-right"></span></a></li><li class="controls-item info-box-buy"><a href="#" class="find-store">Find a store</a></li></ul></div> <% }); %>');

  var resultContent = compiled({'content' : data});
  var infoBox = $('#infoBox');
  $(infoBox).html('');
  infoBox.append(resultContent);
  var infoBoxList = $(infoBox).find('.info-box');
  var carousel = new Carousel(infoBoxList);
});