const btn = document.querySelector('button')
const content2 = document.querySelector('.content2')

btn.addEventListener('click',()=>{
    if (btn.textContent === 'See Less') {
        content2.classList.remove('toggle')
        btn.textContent = 'See More'
    } else{
        content2.classList.add('toggle')
        btn.textContent = 'See Less'
    }
    
})