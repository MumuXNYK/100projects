const container = document.querySelector('.container')
const slideleft = document.querySelector('.left-side')
const slideright = document.querySelector('.right-side')
const up = document.getElementById('up-btn')
const down = document.getElementById('down-btn')
const sliderLength = slideright.querySelectorAll('div').length

let activeSlideIndex = 0

slideleft.style.top = `-${(sliderLength - 1) * 100}vh`

up.addEventListener('click',()=>nextSlide('up'))
down.addEventListener('click',()=>nextSlide('down'))

function nextSlide(params) {
    const sliderHeight = container.clientHeight;

    if (params === 'up') {
        activeSlideIndex++
        if (activeSlideIndex > sliderLength - 1) {
            activeSlideIndex = 0
        }
    }

    if (params === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = sliderLength -1 ;
        }
    }

    slideright.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`

    slideleft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}