const $body = $("body");
const scrollClass = "scroll";
const activeHome = 'active';

// Initiate the wowjs animation library
var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 100, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    scrollContainer: null, // optional scroll container selector, otherwise use window
});
wow.init();

// active nav link when scroll
$(window).on("scroll", () => {
    if (this.matchMedia("(min-width: 992px)").matches) {
        const scrollY = $(this).scrollTop();
        if (scrollY > 0) {
            $body.addClass(scrollClass);
            $('.homepage span').addClass(activeHome);
        } else {
            $body.removeClass(scrollClass);
            $('.homepage span').removeClass(activeHome);
        }
    } else {
        $body.removeClass(scrollClass);
        $('.homepage span').removeClass(activeHome);
    }

    if (this.scrollY > 30) {
        $(".navbar img:first-child").addClass("un-active"),
            $(".navbar img:first-child").removeClass("active"),
            $(".navbar img:last-child").addClass("active"),
            $(".navbar img:last-child").removeClass("un-active");
    } else {
        $(".navbar img:first-child").addClass("active"),
            $(".navbar img:first-child").removeClass("un-active"),
            $(".navbar img:last-child").addClass("un-active"),
            $(".navbar img:last-child").removeClass("active");
    }
});

// scroll top
$(".page-header .nav-link, .navbar-brand").on("click", function (e) {
    e.preventDefault();
    const href = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(href).offset().top - 71
    }, 600);
});