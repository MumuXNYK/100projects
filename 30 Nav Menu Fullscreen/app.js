const menu = document.querySelector('.menu')
const links = document.querySelector('li')
const highlight = document.querySelector('.highlight')
const btn = document.querySelector('.btn')

btn.addEventListener('click',function(){
    if (this.dataset.open === 'close') {
        menu.style.clipPath = 'circle(100% at 50% 50%)' ;
        this.dataset.open = 'open';
    } else {
        menu.style.clipPath = '';
        this.dataset.open = 'close';
        highlight.style = '';
    }
})