const images = document.querySelectorAll('img')
const wrapper = document.getElementById('wrapper')
const imgwrapper = document.getElementById('fullimg')
const close = document.querySelector('span')

images.forEach((img,i)=>{
    img.addEventListener('click',()=>{
        open(`assets/img${i}.jpg`);
    })
})

close.addEventListener('click',()=>{
    wrapper.style.display = 'none';
})

function open(pic) {
    wrapper.style.display = 'flex';
    imgwrapper.src = pic;
}