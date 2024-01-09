const loginForm = document.querySelector('.login-form')
const signupForm = document.querySelector('.signup-form')
const loginBtn = document.querySelector('.login button')
const signupBtn = document.querySelector('.signup button')
const layer = document.querySelector('.layer')

signupBtn.addEventListener('click',()=>{
    loginForm.classList.remove('active')
    signupForm.classList.add('active')
    layer.style.clipPath = "inset(0 0 0 50%)"
})

loginBtn.addEventListener('click',()=>{
    loginForm.classList.add('active')
    signupForm.classList.remove('active')
    layer.style.clipPath = "inset(0 50% 0 0)"
})