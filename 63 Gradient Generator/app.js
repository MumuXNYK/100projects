let c1 = document.querySelector('.c1')
let c2 = document.querySelector('.c2')
let gradient = document.querySelector('#gradient-cont')
let btn = document.querySelector('.random')

function makeColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16)
    return randomColor
}

function generateGradient() {
    c1.value = '#' + makeColor()
    c2.value = '#' + makeColor()
    gradient.style.background = `linear-gradient(${c1.value},${c2.value})` 
}

function setGradient(){
    gradient.style.background = `linear-gradient(${c1.value},${c2.value})`
}

document.body.addEventListener('load' ,generateGradient() )
c1.addEventListener('input',setGradient)
c2.addEventListener('input',setGradient)
btn.addEventListener('click',generateGradient)