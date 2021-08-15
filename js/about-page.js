const tl = gsap.timeline();

// ! About me landing

tl.from('.about-page-heading', {
        x: '20%',
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    })
    .from('.about-page-desc', {
        y: '20%',
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, "-=.5")
    .from('.arrow-link', {
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    })
    .from('.cv-dwnld', {
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, "-=1")