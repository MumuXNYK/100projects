const search = document.querySelector('.container')
const mic = document.querySelector('.mic')
const magnify = document.querySelector('.magnify')

magnify.addEventListener('click',()=>{
    search.classList.toggle('active')
    mic.classList.toggle('hidden')
})