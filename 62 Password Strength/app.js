const pass = document.getElementById('password')
const bg = document.querySelector('.bg')

pass.addEventListener('input',e =>{
    const input = e.target.value;
    const length = input.length;
    const blurness = 20 - length * 2 ;

    bg.style.filter = `blur(${blurness}px)`
})