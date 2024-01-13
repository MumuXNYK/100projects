let body = document.body
let theme = document.querySelector('.theme')
const btns = document.querySelectorAll('.follow')

theme.addEventListener('click',toggleTheme)

function toggleTheme(){
    if (body.className === 'light-theme') {
        body.className = 'dark-theme'
        theme.innerText = 'Light'
    } else{
        body.className = 'light-theme'
        theme.innerText = 'Dark'
    }
}

btns.forEach(btn =>{
    btn.addEventListener('click',e => followUnfollow(e.target))
})

function followUnfollow(button){
    button.classList.toggle('followed')

    if (button.innerText == 'Follow') {
        button.innerText = 'Unfollow'
    } else {
        button.innerText = 'Follow'
    }
}