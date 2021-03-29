/*
 *
 * Particles.js background settings
 *
 */

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 160,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#8a8a8a"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 4,
                "size_min": 0.3,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 50,
            "color": "#ffffff",
            "opacity": 0.3,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 600
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 250,
                "size": 0,
                "duration": 2,
                "opacity": 0,
                "speed": 3
            },
            "repulse": {
                "distance": 400,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});


/*
 *
 * Cards switcherino
 *
 */

const uiCard = document.querySelector('.ui-card');
const frontEndCard = document.querySelector('.web-card');
const logoCard = document.querySelector('.logo-card');

const uiSwitch = document.querySelector('.UI-switch')
const frontEndSwitch = document.querySelector('.frontend-switch')
const logoSwitch = document.querySelector('.logo-switch')


/*
 *
 * Swiperino na mobilu
 *
 */

// ! Swipe left

uiCard.addEventListener('swiped-left', function (e) {
    uiSwitch.classList.remove('switch-active')
    frontEndSwitch.classList.add('switch-active')
    logoSwitch.classList.remove('switch-active');

    uiCard.style.zIndex = "0";
    frontEndCard.style.zIndex = "1";
    logoCard.style.zIndex = "0";
});

frontEndCard.addEventListener('swiped-left', function (e) {
    uiSwitch.classList.remove('switch-active')
    frontEndSwitch.classList.remove('switch-active')
    logoSwitch.classList.add('switch-active');

    uiCard.style.zIndex = "0";
    frontEndCard.style.zIndex = "0";
    logoCard.style.zIndex = "1";
});

// ! swipe right

frontEndCard.addEventListener('swiped-right', function (e) {
    uiSwitch.classList.add('switch-active');
    frontEndSwitch.classList.remove('switch-active');
    logoSwitch.classList.remove('switch-active');

    uiCard.style.zIndex = "1";
    frontEndCard.style.zIndex = "0";
    logoCard.style.zIndex = "0";
});

logoCard.addEventListener('swiped-right', function (e) {
    uiSwitch.classList.remove('switch-active')
    frontEndSwitch.classList.add('switch-active')
    logoSwitch.classList.remove('switch-active');

    uiCard.style.zIndex = "0";
    frontEndCard.style.zIndex = "1";
    logoCard.style.zIndex = "0";
});


/*
 *
 * Switches
 *
 */

uiSwitch.addEventListener('click', () => {
    uiSwitch.classList.add('switch-active');
    frontEndSwitch.classList.remove('switch-active');
    logoSwitch.classList.remove('switch-active');

    uiCard.style.zIndex = "1";
    frontEndCard.style.zIndex = "0";
    logoCard.style.zIndex = "0";
});

frontEndSwitch.addEventListener('click', () => {
    uiSwitch.classList.remove('switch-active')
    frontEndSwitch.classList.add('switch-active')
    logoSwitch.classList.remove('switch-active');

    uiCard.style.zIndex = "0";
    frontEndCard.style.zIndex = "1";
    logoCard.style.zIndex = "0";
});

logoSwitch.addEventListener('click', () => {
    uiSwitch.classList.remove('switch-active')
    frontEndSwitch.classList.remove('switch-active')
    logoSwitch.classList.add('switch-active');

    uiCard.style.zIndex = "0";
    frontEndCard.style.zIndex = "0";
    logoCard.style.zIndex = "1";
})

/* 
 *
 * Menu active class toggle
 *
 */

const nav = $('.desktop-menu');
const li = nav.find('li');

const home = $('#home');
const homeLink = nav.find('.home');

const work = $('#work');
const workLink = nav.find('.work');

const about = $('#about');
const aboutLink = nav.find('.about');

const contact = $('#contact');
const contactLink = nav.find('.contact');


$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= home.offset().top) {
        homeLink.addClass('active-link').siblings().removeClass('active-link');
    }
    if (scroll >= (about.offset().top - 400)) {
        aboutLink.addClass('active-link').siblings().removeClass('active-link');
    }
    if (scroll >= (work.offset().top - 400)) {
        workLink.addClass('active-link').siblings().removeClass('active-link');
    }
    if (scroll >= (contact.offset().top - 400)) {
        contactLink.addClass('active-link').siblings().removeClass('active-link');
    }

});

/*
 *
 * Smooth scroll via links
 *
 */

// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 800, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

const menuBadge = document.querySelector('.menu-badge');
const overlay = document.querySelector('.overlay');
const homeLinkMobile = document.querySelector('.home');
const workLinkMobile = document.querySelector('.work');
const aboutLinkMobile = document.querySelector('.about');
const hireLinkMobile = document.querySelector('.contact');



menuBadge.addEventListener('click', () => {
    overlay.classList.toggle('open');
});

homeLinkMobile.addEventListener('click', () => {
    overlay.classList.remove('open');
    menuBadge.classList.remove('active');
});

workLinkMobile.addEventListener('click', () => {
    overlay.classList.remove('open');
    menuBadge.classList.remove('active');
});

aboutLinkMobile.addEventListener('click', () => {
    overlay.classList.remove('open');
    menuBadge.classList.remove('active');
});

hireLinkMobile.addEventListener('click', () => {
    overlay.classList.remove('open');
    menuBadge.classList.remove('active');
});