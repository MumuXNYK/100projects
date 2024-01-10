let sliders = document.querySelectorAll('input[type="range"]')
let colors = document.querySelectorAll('input[type="color"]')
let output = document.getElementById('css-code')
let copy = document.getElementById('copy')

sliders.forEach(slider =>{
    slider.addEventListener("input",createBoxShadow) 
})

colors.forEach(color =>{
    color.addEventListener('change',createBoxShadow)
})

copy.addEventListener('click',()=>{
    output.select();
    document.execCommand('copy');
})

function createBoxShadow(){
    let x = sliders[0].value
    let y = sliders[1].value
    let blur = sliders[2].value
    let spread = sliders[3].value 

    let shadowcolor = colors[0].value;
    let boxShadow = `${x}px ${y}px ${blur}px ${spread}px ` ;

    document.getElementById('box').style.cssText = `box-shadow : ${boxShadow} ${shadowcolor}`;
    output.value = `box-shadow: ${boxShadow}`
}

createBoxShadow()