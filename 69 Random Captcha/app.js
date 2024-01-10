let captcha = document.querySelector('.captcha')
let reload = document.querySelector('.reload')
let inputField = document.querySelector('input')
let check = document.querySelector('.check')
let statusTxt = document.querySelector('.status')

let allCharacters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
  ];

  check.addEventListener("click", (e) => {
    e.preventDefault();
    statusTxt.style.display = "block";
    let inputVal = inputField.value.split("").join("");
    if (inputVal == captcha.innerText) {
      statusTxt.style.color = "Green";
      statusTxt.innerText = "Nice, Captcha Matched";
    } 
    else {
      statusTxt.style.color = "Black";
      statusTxt.innerText = "Captcha not matched. Please Try Again Later";
    }
    setTimeout(() => {
        statusTxt.style.display = "";
        inputField.value = "";
        captcha.innerText = "";
        getCaptcha();
      }, 4000);
  });

  function getCaptcha() {
    for (let i = 0; i < 6; i++) {
        let random = allCharacters[Math.floor(Math.random() * allCharacters.length)];
        captcha.innerText += `${random}` ;
    }
  }

  reload.addEventListener('click',()=>{
    captcha.innerHTML = '';
    getCaptcha();
  })