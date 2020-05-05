const ham = document.querySelector('#navToggle');
const leftContent = document.querySelector('.leftContent');
const nav = document.querySelector('.navSection');

ham.addEventListener('click', (e) => {
    leftContent.style.left = '-2000px';
    e.preventDefault();
});

nav.addEventListener('click',(e)=>{
    leftContent.style.left = '0px';
});
