let toggle = document.querySelector('#switch')

toggle.addEventListener('click',()=>{
    if (toggle.checked === true) {
        document.body.style.backgroundColor = 'black'
    } else {
        document.body.style.backgroundColor = 'white'
    }
})