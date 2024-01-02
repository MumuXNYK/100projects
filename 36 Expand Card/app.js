const slides = document.querySelectorAll('.slide')

slides.forEach(slide =>{
    slide.addEventListener('click',()=>{
        removeActive();
        slide.classList.add('active');
    })
})

function removeActive(){
    slides.forEach(slide =>{
        slide.classList.remove('active');
    })
}