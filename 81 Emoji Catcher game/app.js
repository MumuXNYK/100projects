const squares = document.querySelectorAll('.square')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let res = 0
let hitPos
let curTime = 60
let timerId = null

function randomSquare(){
    squares.forEach(square =>{
        square.classList.remove('emoji')
    })

    let randomSquare = squares[Math.floor(Math.random() * 7) + 1]
    randomSquare.classList.add('emoji')

    hitPos = randomSquare.id;
}

squares.forEach(square =>{
    square.addEventListener('mousedown',()=>{
        if (square.id == hitPos) {
            res++
            score.textContent = res
            hitPos = null
        }
    })
})

function moveEmoji(){
    timerId = setInterval(randomSquare, 500);
}

moveEmoji()

function countDown(){
    curTime--
    timeLeft.textContent = curTime

    if (curTime == 0) {
        clearInterval(countDownId)
        clearInterval(timerId)
        alert(` Final score : ${res} `)
    }
}

let countDownId = setInterval(countDown,1000)