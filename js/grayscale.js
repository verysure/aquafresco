/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */





// Controls the youtube playing
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('introvideo',{
        events: {
            'onReady': onPlayerReady,
            'onStateChange': closeModal,
        }
    });
}

function onPlayerReady(event) {
    player.playVideo();
    player.pauseVideo();
    player.seekTo(0);
    var modal = "#intromodal";

    // Modal on shown
    $(modal).on('show.bs.modal', function(e){
        player.seekTo(0);
        player.playVideo();
    });

    // Modal on hide
    $(modal).on('hide.bs.modal', function(e){
        player.pauseVideo();
    });
}

function closeModal(event) {
    var modal = "#intromodal";
    if (event.data === 0) {
        $(modal).modal('hide');
    }
}








// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});






// Popover
$(function () {
  $('[data-toggle="popover"]').popover()
});
