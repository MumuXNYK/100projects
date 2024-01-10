let res = document.querySelector('.res-btn')

res.addEventListener('click',decimal)

function decimal() {
    let decimal = document.getElementById('number').value;
    let temp;
    let rem = 0;
    let binary = 0;
    let place = 1;

    temp = decimal;

    while (temp > 0) {
        rem = temp % 2;
        binary = binary + rem * place;
        temp = parseInt(temp / 2);
        place = place * 10;
    }

    const h1 = document.createElement('h1')
    h1.innerHTML = `${binary}`

    const container = document.querySelector('.result-container')
    container.append(h1)
}