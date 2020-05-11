const image = document.querySelector('#parallax-img');
new simpleParallax(image, {
	delay:.1,
    transition: 'cubic-bezier(0,0,0,1)',
    scale: 1.35,
});
