let inner = document.querySelector('.inner-cursor')
let outer = document.querySelector('.outer-cursor')

document.addEventListener('mousemove',moveCursor)

function moveCursor(e) {
    let X =  e.clientX
    let Y =  e.clientY

    inner.style.left = `${X}px`
    inner.style.top = `${Y}px`
    outer.style.left = `${X}px`
    outer.style.top = `${Y}px`
}