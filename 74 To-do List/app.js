let form = document.querySelector('form')
let input = document.querySelector('input')
let output = document.querySelector('.output')
let msg = document.querySelector('.message-container')

function getTodo(val) {
    let todo = document.createElement('div')
    let textEl = document.createElement('span')
    textEl.innerHTML = val
    todo.appendChild(textEl)
    msg.classList.toggle('success')
    msg.textContent = 'Item Added' 

    setTimeout(() => {
        msg.classList.toggle('success')
    }, 2000);

    let close = document.createElement('span')
    close.innerHTML = '&times;'
    close.classList.add('delete')

    close.addEventListener('click',()=>{
        output.removeChild(todo)
        msg.classList.toggle('error')
        msg.textContent = "Item Removed"

        setTimeout(() => {
            msg.classList.toggle('error')
        }, 2000);   
    })

    todo.appendChild(close)
    todo.classList.add('todo')
    return todo;
}

form.addEventListener('submit',e=>{
    e.preventDefault()
    let val = input.value
    if(!val.trim()) return;
    output.appendChild(getTodo(val))
    input.value = '';
})