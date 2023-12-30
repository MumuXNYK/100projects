const copyText = document.querySelector('textarea[name="copyTxt"]')
const finalText = document.querySelector('textarea[name="finalTxt"]')
const moveBtn = document.querySelector('.movebtn')
const copyBtn = document.querySelector('.copybtn')
const output = document.querySelector('.out')

copyBtn.addEventListener('click',()=>{
    let temp = copyText.value
    copyToClipboard(temp)
})

moveBtn.addEventListener('click',()=>{
    let temp = copyText.value
    finalText.value = temp
})

copyText.addEventListener('click',()=>this.select);
finalText.addEventListener('click',()=>this.select);

// this function creates a textarea to work as a clipboard or basically an buffer
function copyToClipboard(str) {
    const outContainer = document.querySelector('.out-container')
    const textArea = document.createElement('textarea')
    textArea.value=str
    outContainer.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    outContainer.removeChild(textArea)
}

