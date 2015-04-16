/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */



// // Add api src
// var tag = document.createElement('script');
//
// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = $('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//
// // Youtube api on load
// var player;
// function onYouTubePlayerReady() {
//     player = new YT.Player('video', {
//       events: {
//         'onReady': onPlayerReady
//       }
//     });
// }
// function onPlayerReady(event){
//     // event.target.playVideo();
//     // document.id("escolta").addEvent('click', function() {
//     //     player.playVideo();
//     // });
//     // document.id("pausa").addEvent('click', function() {
//     //     player.stopVideo();
//     // });
//     var = player = event.target;
// }


var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('introvideo');
    player.playVideo();
    console.log("api_loaded");
}




// Adds events for modal
$(document).ready(function(){

    // first get the links and targets
    var modallink = $("body").find('[data-toggle="modal"]');
    var target = modallink.data("target");
    var videourl = $(target+' iframe').attr('src');


    // Modal on show
    $(target).on('show.bs.modal', function(e){
        $(target + ' iframe').attr('src', videourl+"&autoplay=1");
    });

    // Modal on hidden
    $(target).on('hidden.bs.modal', function(e){
        $(target + ' iframe').attr('src', videourl);
    });

});



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
