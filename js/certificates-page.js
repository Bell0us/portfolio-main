const tl = gsap.timeline();

// ! About me landing

tl.from('.certificates-page-heading', {
        x: '20%',
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out'
    })
    .from('.gallery', {
        y: '20%',
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out'
    }, "-=1")
    .from('.arrow-link', {
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    }, "-=.5")