const grey= document.querySelector('.grey-heart')
const red= document.querySelector('.red-heart')

grey.addEventListener('click',() => {
    red.classList.add('animation')
    grey.classList.add('fill-color')
    grey.classList.remove('animationa')
    grey.classList.remove('fill-color1')
})

red.addEventListener('click',() => {
    red.classList.remove('animation')
    grey.classList.remove('fill-color')
    grey.classList.add('animationa')
    grey.classList.add('fill-color1')
})