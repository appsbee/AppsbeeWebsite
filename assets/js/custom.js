/**
 * Text Typing Animation
 * @param {HTMLElement} el - The element to apply the typing animation to
 * @param {Array} toRotate - Array of strings to rotate
 * @param {number} period - The time period between each character being typed (in milliseconds)
 */
class TxtType {
    constructor(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    }

    /**
     * Performs the typing animation
     */
    tick() {
        let i = this.loopNum % this.toRotate.length;
        let fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        let that = this;
        let delta = 200 - Math.random() * 100;

        if (this.isDeleting) {
            delta /= 2;
        }

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
    }
}

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