const url = 'https://api.thecatapi.com/v1/images/search'
const section = document.querySelector('.cat')
const btn = document.querySelector('button')

btn.addEventListener('click',getRandomCats)

randomCatPhoto = (json)=>{
    let photo = json[0].url
    section.classList.add('cats')

    let img = document.createElement('img')
    img.src = photo;
    img.classList.add('random')
    img.alt = photo
    section.appendChild(img)
}

async function getRandomCats() {
    section.innerHTML = ''
    try {
        const res = await fetch(url)
        const json = await res.json()
        return randomCatPhoto(json)
    } catch (e) {
        console.log('error')
        console.log(e)
    }
}