var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    //css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

// Clients Testimonials Carousel

$('.owl-test').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    rewind: true,
	autoplay: true,
	dots: true,
    nav: false,
    //navText: ["<div class='nav-button owl-prev'><i class='fa-solid fa-chevron-left fa-2x'></i></div>", "<div class='nav-button owl-next'><i class='fa-solid fa-chevron-right fa-2x'></i></div>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false,
            loop:true,
        },
        1000:{
            items:1,
            nav:false,
            loop:true
        },
        1366:{
            items:1,
            nav:false,
            loop:true
        }
    }
})


//Navbar fixed scroll

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('.navbar').addClass('fixed-top bg-white bg-opacity-75 shadow-lg');
    } else {
        $('.navbar').removeClass('fixed-top bg-white bg-opacity-75 shadow-lg');
    }
});

//scroll to top

(function ($) {

    $('body').append("<div class='go-top'><i class='fa-solid fa-circle-chevron-up'></i></div>");
    $(window).on('scroll', function() {
        var scrolled = $(window).scrollTop();
        if (scrolled > 600) $('.go-top').addClass('active');
        if (scrolled < 600) $('.go-top').removeClass('active');
    });
    $('.go-top').on('click', function() {
        $('html, body').animate({
            scrollTop: '0',
        }, 50);
    });

})(jQuery);