/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */




// Adds events for modal
$(document).ready(function(){

    // first get the links and targets
    var modallink = $("body").find('[data-toggle="modal"]');
    var target = modallink.data("target");
    var videourl = "http://www.youtube.com/embed/" + modallink.data("youtubeid") + "?controls=0&showinfo=0&rel=0&vq=hd720";

    // Loads the modal iframe first
    $(target+' iframe').attr('src', videourl);

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
