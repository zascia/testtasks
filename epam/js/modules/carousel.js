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

        function showDetails(obj) {
            var currentActive = obj;
            $(currentActive).find('.info-box-image').toggle('50');
            $(currentActive).find('.info-box-details').toggle('50');
            $(currentActive).find('.more-link').toggle('50');
        }

        $(currentActive).show();
        $(currentActive).one('click', '.nav-link', function singleClick(e) {
            e.preventDefault();
            if (!$(this).hasClass('nav-last')) {
                direction = $(this).hasClass('nav-prev') ? currentIndex-- : currentIndex++;
                var nextActive = $(obj).get(currentIndex);
                $(currentActive).toggle();
                $(nextActive).toggle();
                currentActive = nextActive;
            }
            $(currentActive).one('click', '.nav-link', singleClick);
            $(currentActive).on('click', '.more-link', function(e) {
                e.preventDefault();
                if ( $(this).is(':visible') ) showDetails($(currentActive));
            });
        });

        $(currentActive).on('click', '.more-link', function(e) {
            e.preventDefault();
            if ( $(this).is(':visible') ) showDetails($(currentActive));
        });

    };

    return Carousel;

});