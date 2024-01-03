const btns = document.querySelectorAll('.btn')

btns.forEach(btn =>{
    btn.addEventListener('click',()=>{
        num = btn.value
        changeBG(num);
    })
})

const body = document.body

function changeBG(num){
    body.className = ""
    switch (num) {
        case 'purple':
            body.classList.add('purple')
            break;
        case 'blue':
            body.classList.add('blue')
            break;
        case 'red':
            body.classList.add('red')
            break;
        case 'green':
            body.classList.add('green')
            break;
        case 'yellow':
            body.classList.add('yellow')
            break;
        case 'teal':
            body.classList.add('teal')
            break;
        default:
            break;
    }
}