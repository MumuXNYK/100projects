const header = document.querySelectorAll('.item-header')

header.forEach(acc =>{
    acc.addEventListener('click',()=>{

        const active = document.querySelector('.active')

        if (active && active !== acc) {
            active.classList.toggle('active')
            active.nextElementSibling.style.maxHeight = 0
        }

        acc.classList.toggle('active')
        const body = acc.nextElementSibling ;

        if (acc.classList.contains('active')) {
            body.style.maxHeight = body.scrollHeight + 'px' ;
        }else{
            body.style.maxHeight = 0;
        }
    })
})