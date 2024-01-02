const inpfield = document.getElementById('input-field')
const outfield = document.getElementById('output-field')
const buttons = document.querySelectorAll('button')

inpfield.addEventListener('keyup',()=>outfield.innerHTML = inpfield.value)

buttons.forEach(btn =>{
    btn.addEventListener('click', ()=> {
        if (btn.classList.contains('upper')) {
            outfield.innerHTML = outfield.innerHTML.toUpperCase();
        } else if (btn.classList.contains('lower')) {
            outfield.innerHTML = outfield.innerHTML.toLowerCase();
        } else if (btn.classList.contains('capital')) {
            outfield.innerHTML = outfield.innerHTML.charAt(0).toUpperCase() + outfield.innerHTML.slice(1).toLowerCase();
        } else if (btn.classList.contains('bold')) {
            outfield.style.fontWeight = 'bold';
        }else if (btn.classList.contains('italic')) {
           outfield.style.fontStyle = 'italic';
        }else if (btn.classList.contains('underline')) {
            outfield.style.textDecoration = 'underline';
        }
    })
})