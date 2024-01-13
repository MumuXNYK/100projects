const title = document.getElementById('title')
const author = document.getElementById('author')
const year = document.getElementById('year')
const booklist = document.getElementById('book-list')
const btn = document.querySelector('.btn')

btn.addEventListener('click', e =>{
    e.preventDefault()

    if (title.value == '' && author.value == '' && year.value == '') {
        alert('Fill the Form')
    } else{
        const newRow = document.createElement('section')

        const newTitle = document.createElement('div')
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);

        const newAuthor = document.createElement('div')
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);

        const newYear = document.createElement('div')
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);

        booklist.appendChild(newRow);
    }
})