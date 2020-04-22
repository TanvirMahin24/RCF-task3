const nav = document.querySelector('.navLinkSection');

let flag = true;
const ham = document.querySelector('#hamburger').addEventListener('click', (e) => {
    if(flag){
        nav.style.left=0;
        document.querySelector('body').className='noScroll';
        flag = false;
    }
    else{
        nav.style.left='-2000px';
        document.querySelector('body').className='';
        flag= true;
    }
    
    e.preventDefault();
})