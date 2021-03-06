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

/*
 *
 * Loading page animations
 *
 */

const tl = gsap.timeline();

tl.to('.intro-logo', {
        y: '0%',
        duration: 1,
        ease: 'power1.out'
    })
    .to('.text', {
        y: '0%',
        duration: 1,
        stagger: .5,
        ease: 'power1.out'
    }, "-=.25")
    .to('.slider', {
        y: '-100%',
        duration: 1.5,
        delay: .5,
        ease: 'power1.out'
    })
    .to('.intro', {
        y: '-100%',
        duration: 1,
        ease: 'power1.out'
    }, "-=1")

/*
 *
 * GSAP Anims
 *
 */

// ! Landing page

tl.from('.main-heading', {
        y: '20%',
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, "-=.5")
    .from('.introduction', {
        y: '20%',
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, "-=.5")
    .from('.scroll', {
        y: '20%',
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, "-=.5")

/*
 *
 * ScrollTrigger animatons
 *
 */

gsap.registerPlugin(ScrollTrigger);

gsap.from('.a-heading-container', {
    scrollTrigger: {
        trigger: '.a-heading-container',
        start: 'top 100%',
        scrub: 1
    },
    /* y: '20%', */
    opacity: 0,
    duration: 1.5,
    ease: 'power3.out',
})

gsap.from('.a-desc', {
    scrollTrigger: {
        trigger: '.a-desc',
        start: 'top 100%',
        scrub: 1
    },
    /* y: '20%', */
    opacity: 0,
    duration: 1.5,
    ease: 'power3.out',
})

gsap.from('.card-container', {
    scrollTrigger: {
        trigger: '.card-container',
        start: 'top 100%',
        scrub: 1
    },
    opacity: 0,
    duration: 1.5,
    ease: 'power3.out',
})

// ! Work page

gsap.from('.w-heading-container', {
    scrollTrigger: {
        trigger: '.w-heading-container',
        start: 'top 100%',
        scrub: 1
    },
    /* y: '20%', */
    opacity: 0,
    duration: 1.5,
    ease: 'power3.out',
})

gsap.from('.w-desc', {
    scrollTrigger: {
        trigger: '.w-desc',
        start: 'top 100%',
        scrub: 1
    },
    /* y: '20%', */
    opacity: 0,
    duration: 1.5,
    ease: 'power3.out',
})

gsap.from('.work-card', {
    scrollTrigger: {
        trigger: '.work-card',
        start: 'top 100%',
        scrub: 1
    },
    /* y: '20%', */
    opacity: 0,
    duration: 1.5,
    ease: 'power3.out',
})

gsap.from('.work-card-2', {
    scrollTrigger: {
        trigger: '.work-card-2',
        start: 'top 100%',
        scrub: 1
    },
    /* y: '20%', */
    opacity: 0,
    duration: 1.5,
    ease: 'power3.out',
})

// ! Contact page

gsap.from('.c-heading-container', {
    scrollTrigger: {
        trigger: '.c-heading-container',
        start: 'top 100%',
        scrub: 1
    },
    /* y: '20%', */
    opacity: 0,
    duration: 1.5,
    ease: 'power3.out',
})

gsap.from('.c-desc', {
    scrollTrigger: {
        trigger: '.c-desc',
        start: 'top 100%',
        scrub: 1
    },
    /* y: '20%', */
    opacity: 0,
    duration: 1.5,
    ease: 'power3.out',
})

gsap.from('.contact-main', {
    scrollTrigger: {
        trigger: '.contact-main',
        start: 'top 100%',
        scrub: 1
    },
    /* y: '20%', */
    opacity: 0,
    duration: 1.5,
    ease: 'power3.out',
})