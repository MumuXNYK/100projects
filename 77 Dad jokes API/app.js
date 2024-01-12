const url = 'https://icanhazdadjoke.com/'
const btn = document.getElementById('btn')
const content = document.getElementById('content')

btn.addEventListener('click',joke)

async function joke() {
    let config = {
        headers: {
            Accept: 'application/json'
        },
    }

    let a = await fetch(url,config);
    let b = await a.json()
    content.innerHTML = b.joke;
}