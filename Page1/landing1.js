const nav = document.querySelector('.navSection');
let flag = true;
const ham = document.querySelector('#hamburger').addEventListener('click', (e) => {
    if(flag){
        nav.style.left=0;
        flag = false;
    }
    else{
        nav.style.left='-2000px';
        flag= true;
    }
    
    e.preventDefault();
})