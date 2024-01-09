const menuBtn = document.getElementById('menu')
const sideabr = document.getElementById('sidebar')
const content = document.getElementById('content')

menuBtn.addEventListener('click',()=>{
    sideabr.classList.toggle('active')
    content.classList.toggle('active')
})