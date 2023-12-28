 let indicator=document.querySelector('.scroll-indicator .progress');
 let scrollHeight=document.documentElement.scrollHeight - document.documentElement.clientHeight;

 window.addEventListener("scroll",scroll);

 function scroll(){
    let scrolltop = document.documentElement.scrollTop;
    let scrolled= (scrolltop / scrollHeight) * 100
    indicator.style.width= `${scrolled}%`
 }


    
