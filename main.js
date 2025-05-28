gsap.registerPlugin(ScrollTrigger)

let sections = gsap.utils.toArray('.page')
gsap.to(sections, {
	xPercent: -100 * (sections.length - 1),
	ease: 'none',
	scrollTrigger: {
		trigger: '.wrapper',
		pin: true,
		start: 'top top',
		scrub: 1,
		snap: {
			snapTo: 1 / (sections.length - 1),
			inertia: false,
			duration: { min: 1.5, max: 2 },
		},
		end: () => '+=' + document.querySelector('.wrapper').offsetWidth,
	},
})
