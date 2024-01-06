const rating = document.querySelectorAll('.rating')
const rcontainer = document.querySelector('.rcontainer')
const btn = document.querySelector('#send')
const panel = document.querySelector('#panel')

let selected = 'Satisfied'

rcontainer.addEventListener('click',e =>{
    if (e.target.parentNode.classList.contains('rating')) {
        removeActive()
        e.target.parentNode.classList.add('active')
        selected = e.target.nextElementSibling.innerHTML
    }
})

btn.addEventListener('click',()=>{
    panel.innerHTML = `
        <p class="heart">💖</p>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selected}</strong>
    `
})

function removeActive(){
    for (let i = 0; i < rating.length; i++) {
        rating[i].classList.remove('active')
    }
}