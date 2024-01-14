const interval_ms = 1000 / 60
let timerId
let lastTimerStartTime = 0;
let elapsedTime = 0;

const timer = document.getElementById('timer')
const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')
const resetBtn = document.getElementById('reset')

startBtn.addEventListener('click',startTimer)

stopBtn.addEventListener('click',stopTimer)

resetBtn.addEventListener('click',resetTimer)

function startTimer(){
    startBtn.disable = true 
    stopBtn.disable = false
    resetBtn.disable = true 

    lastTimerStartTime = Date.now()
    timerId = setInterval( updateTimer , interval_ms);
}

function stopTimer() {
    startBtn.disable = false 
    stopBtn.disable = true
    resetBtn.disable = false
    
    elapsedTime += Date.now() - lastTimerStartTime;
    clearInterval(timerId)

}

function resetTimer(){
    resetBtn.disable = true 
    timer.textContent = "00:00:00"
    elapsedTime=0
}

function updateTimer(){
    const ms = Date.now() - lastTimerStartTime + elapsedTime ;
    const s = ms / 1000;
    const m = s / 60;

    const msText = formatNumber(ms % 1000 , 3)
    const sText = formatNumber(Math.floor(s) % 60, 2)
    const mText = formatNumber(Math.floor(m), 2)

    timer.textContent = `${mText}:${sText}:${msText}`
}

function formatNumber(num,l){
    const strNum = String(num)

    if (strNum.length > l) {
        return strNum.slice(0,l)
    }

    return strNum.padStart(l,"0")
}