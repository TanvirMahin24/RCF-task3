const nav = document.querySelector('.navLinkSection');
const l1 = document.querySelector('.line1');
const l2 = document.querySelector('.line2');
const l3 = document.querySelector('.line3');
let flag = true;
const ham = document.querySelector('#hamburger').addEventListener('click', (e) => {
    if(flag){
        nav.style.left=0;
        document.querySelector('body').className='noScroll';
        l1.className = 'r45 line line1';
        l3.className = 'r45rev line line3';
        l2.className = 'line line2 hide';
        flag = false;
    }
    else{
        nav.style.left='-2000px';
        document.querySelector('body').className='';
        l1.className = 'line line1';
        l3.className = 'line line3';
        l2.className = 'line line2';
        flag= true;
    }
    
    e.preventDefault();
})