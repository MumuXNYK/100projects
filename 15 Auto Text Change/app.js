const text = document.querySelector('.text')
const cursor = document.querySelector('.cursor') 

let words = ['Awsome','Fun','Weird','Cool','Life','Famous','🤞'];
const typingDelay = 200;
const erasingDelay = 200;
const newLetterDelay = 2000;

let index = 0;
let chIndex = 0;

document.addEventListener('DOMContentLoaded',() =>{
    if(words.length){
        setTimeout(type, newLetterDelay);
    }
})

function type(){
    if (chIndex < words[index].length){
        text.textContent += words[index].charAt(chIndex);
        chIndex++
        setTimeout(type, typingDelay);
    } else{
        setTimeout(erase, newLetterDelay);
    }
}

function erase() {
    if (chIndex>0) {
        text.textContent = words[index].substring(0,chIndex - 1);
        chIndex-- ;
        setTimeout(erase, erasingDelay);
    } else {
        index++ ;
        if(index >= words.length){
            index=0 ;
        }
        setTimeout(type,typingDelay + 1100);
    }
}