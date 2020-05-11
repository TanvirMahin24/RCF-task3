const image = document.querySelector('#parallax-img');
new simpleParallax(image, {
	delay:.1,
    transition: 'cubic-bezier(0,0,0,1)',
    scale: 1.35,
});

const target = document.querySelector('.mob');
const toggleOff = document.querySelector('.nav button');

const toggleOn = document.querySelector('.blank button').addEventListener('click', (e) => {
    target.style.top = '0px';
});

toggleOff.addEventListener('click', (e) => {
    target.style.top = '-2000px';
})
