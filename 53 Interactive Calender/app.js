const monthEl = document.getElementById('month')
const dateEl = document.getElementById('date')
const dayEl = document.getElementById('day')
const yearEl = document.getElementById('year')

const date = new Date()

const month = date.getMonth()
monthEl.innerHTML = date.toLocaleDateString('en',{
    month: 'long',
})

dateEl.innerHTML = date.toLocaleDateString('en',{
    weekday: 'long',
})

dateEl.innerHTML = date.getDate()
yearEl.innerHTML = date.getFullYear()
