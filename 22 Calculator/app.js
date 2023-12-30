document.getElementById('btn').addEventListener('click', ()=> {
    let n1=document.querySelector('.n1').value
    let n2=document.querySelector('.n2').value
    let result=document.querySelector('.result')
    let op = document.getElementById('op').value

    switch (op) {
        case 'plus':
            result.innerHTML = +n1 + +n2;
            break;
        case 'min':
            result.innerHTML = +n1 - +n2;
            break;    
        case 'mult':
            result.innerHTML = +n1 * +n2;
            break;
        case 'div':
            result.innerHTML = +n1 / +n2;
            break;
    }
})
