/**
 * Created by ashu on 02-Nov-15.
 */
define(['underscore', 'jquery'], function(_, $) {
    function Carousel(obj) {
        // init
        var direction;
        var numOfItems = obj.length;
        var currentIndex = 0;
        var currentActive =  $(obj).hide().get(currentIndex);

        function showDetails() {
            var hideLinkPos = $(currentActive).find('.more-link-container').scrollTop();
            console.log('hideLinkPos', hideLinkPos);
            $(currentActive).find('.info-box-content').toggleClass('activated');
            $(currentActive).find('.info-box-image').toggle();
            $(currentActive).find('.info-box-details').toggle();
            $(currentActive).find('.more-link').toggle("", function() {
                /*console.log('enter into move link back func', $(this).parent().scrollTop() - hideLinkPos);
                if ( $(this).hasClass('hide-details') && $(this).is(':visible') ) {
                    $(this).parent().scrollTo(200);
                }*/
            });
        }

        $(currentActive).show();
        $(currentActive).one('click', '.nav-link', function singleClick(e) {
            e.preventDefault();
            if (!$(this).hasClass('nav-last')) {

                if ( $(currentActive).find('.hide-details').is(':visible') ) {
                    showDetails($(currentActive));
                }

                direction = $(this).hasClass('nav-prev') ? currentIndex-- : currentIndex++;
                var nextActive = $(obj).get(currentIndex);
                $(currentActive).toggle();
                $(nextActive).toggle();
                currentActive = nextActive;
            }
            $(currentActive).one('click', '.nav-link', singleClick);

        });

        $(obj).on('click', '.more-link', function(e) {
            console.log('obj click event and this = ', $(this));
            e.preventDefault();
            if ( $(this).is(':visible') ) showDetails();
        });

    };

    return Carousel;

});
