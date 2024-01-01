const eye1 = document.querySelector('.eye-icon1')
const eye2 = document.querySelector('.eye-icon2')
const input = document.querySelector('input')
const eyeholder = document.querySelector('.eye')

eye1.addEventListener('click',()=>{
    if (input.type === 'password') {
        input.type = 'text'
        eye1.style.visibility = 'hidden'
        eye2.style.visibility = 'visible'
    } 
})

eye2.addEventListener('click',()=>{
    if (input.type === 'text') {
        input.type = 'password'
        eye1.style.visibility = 'visible'
        eye2.style.visibility = 'hidden'
    } 
})