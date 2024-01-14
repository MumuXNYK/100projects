const main = document.querySelector('.main')
const tyArea = document.querySelector('.typing')
const btn = document.querySelector('.btn')

const words = [
    "A day in the life of programmer",
    "What is JavaScript?",
    "What is React?",
    "What is Programming Language?",
    "What's your name?",
    "Where are you from?",
    "This is just random word",
    "What is Remix.js?",
    "New Technologies",
    "Is programming hard?",
    "Why do you wanna become a programmer?",
    "Which programming language you like the most?",
    "What is Golang? and why do you wanna learn it?",
    "What is CSS",
  ];

const game = {
    start: 0, 
    end:0, 
    user:"",
    arrTxt:""
}

btn.addEventListener('click',()=>{
    if (btn.textContent == 'Start') {
        play()
        tyArea.value = ''
        tyArea.disabled = false
    } else if (btn.textContent == 'Done'){
        tyArea.disabled = true
        main.style.borderColor = "white"
        end()
    }
})

function play() {
    let randTxt = Math.floor(Math.random() * words.length)
    main.textContent = words[randTxt]
    game.arrTxt = words[randTxt]
    main.style.borderColor = "#c8c8c8"
    btn.textContent = 'Done'
    const dur = new Date()
    game.start = dur.getTime()
}

function end() {
    const dur = new Date()
    game.end = dur.getTime()
    const totalTime = (game.end - game.start) / 1000
    game.user = tyArea.value
    const correct = results()
    main.style.borderColor = 'white'
    main.innerHTML = `Time: ${totalTime} Score: ${correct.score} out of ${correct.total}`
    btn.textContent = 'Start'
}


function results(){
    let v1 = game.arrTxt.split(" ")
    let v2 = game.user.split(" ")
    let score = 0
    v1.forEach((word,i)=>{
        if (word === v2[i]) {
            score++
        }
    })

    return {score,total: v1.length}
}
