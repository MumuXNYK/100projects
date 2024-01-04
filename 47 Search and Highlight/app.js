const p = document.getElementById('p')
const btn = document.getElementById('searchBtn')

btn.addEventListener('click',()=>{
    let input = document.getElementById('input').value;

    if (input !== '') {
        let regex = new RegExp(input, 'gi');
        p.innerHTML = p.textContent.replace(regex,"<mark>$&</mark>");
    }
})