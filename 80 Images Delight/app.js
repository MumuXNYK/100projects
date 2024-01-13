let btns = document.querySelectorAll('.btn')
let banner = document.getElementById('banner')

btns.forEach((btn,i) =>{
    btn.addEventListener('click',()=>{
        banner.src = `asset/${i}.jpg`
        abimation()
        btn.classList.add('active')
    })
})
function abimation() {
    banner.classList.add('zoom')

    setTimeout(() => {
        banner.classList.remove('zoom')
    }, 1000);

btns.forEach(b =>{
    b.classList.remove('active')
})
}
