const inbtn = document.querySelector('.increament')
const svbtn = document.querySelector('.save')
const count = document.getElementById('count')
const save = document.getElementById('save')


let c = 0

inbtn.addEventListener('click',()=>{
    c += 1
    count.textContent = c
})

svbtn.addEventListener('click',()=>{
    let str = c + " , "
    save.textContent += str
    count.textContent = 0
    c = 0
})