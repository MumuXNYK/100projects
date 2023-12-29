const cursor=document.querySelector('.cursor')

document.addEventListener('mousemove',(e)=>{
    moveCursor(e.x,e.y)
})

const moveCursor = function (x,y) {
    cursor.style.left = x + 'px'
    cursor.style.top = y + 'px'
}