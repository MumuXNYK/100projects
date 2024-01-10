const gen = document.querySelector('.btn1')
const copy = document.querySelector('.btn2')

gen.addEventListener('click',()=>genPass())
copy.addEventListener('click',()=>copyPass())

function genPass(){
    let ch = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    plength = 7;
    pass = '';

    for (let i = 0; i <= plength; i++) {
        let random = Math.floor(Math.random() * ch.length);
        pass += ch.substring(random , random + 1);
    }
    document.querySelector('input').value = pass ;
}

function copyPass() {
    let copyTxt = document.querySelector('input');
    copyTxt.select();
    document.execCommand('copy')
}