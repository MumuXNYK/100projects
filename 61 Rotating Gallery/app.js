const imgContainer = document.querySelector('.image-container')
const prev = document.getElementById('prev')
const next = document.getElementById('next')

let x =0

prev.addEventListener('click',()=>{
    x += 45
    rotate()
})

next.addEventListener('click',()=>{
    x -= 45
    rotate()
})

function rotate(){
    imgContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`
}