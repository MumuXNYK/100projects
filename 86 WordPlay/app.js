const textInput = document.querySelector('.inp')
const worldCountElement  = document.querySelector('.word')
const letterCountElement  = document.querySelector('.letter')
const spaceCountElement  = document.querySelector('.space')

const checks = [leastCharacters];

function leastCharacters(text) {
  const letters = text.match(/[a-z]/gi) || [];
  return letters.length >= 1;
}

textInput.addEventListener("input", () => {
  const splitted = textInput.value.trim().split(/[\s-]/);
  const letterCount = (textInput.value.match(/[a-z]/gi) || []).length;
  const spaceCount = (textInput.value.match(/\s+/g) || []).length;
  let wordCount = 0;

  outer: for (const text of splitted) {
    for (const check of checks) {
      if (!check(text)) {
        continue outer;
      }
    }
    wordCount++;
  }

  worldCountElement.textContent = wordCount;
  letterCountElement.textContent = letterCount;
  spaceCountElement.textContent = spaceCount;
});