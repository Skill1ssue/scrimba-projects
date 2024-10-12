const buttonEl = document.getElementById('button-el')
const inputLeft = document.getElementById('password')
const inputRight = document.getElementById('password2')
const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
  "/"];

buttonEl.addEventListener('click', () => { showPasswords() })
inputLeft.addEventListener('click', () => { copyToClipboard(inputLeft.value) })
inputRight.addEventListener('click', () => { copyToClipboard(inputRight.value) })

function getRandomCharacter() {
  return characters[Math.floor(Math.random() * (characters.length - 1))]
}

function getPassword() {
  const passwordLength = 15
  let password = ''
  for (i = 1; i <= passwordLength; i++) {
    password += getRandomCharacter()
  }
  return password
}

function showPasswords() {
  inputLeft.value = getPassword()
  inputRight.value = getPassword()
}

function copyToClipboard(inputValue) {
  navigator.clipboard.writeText(inputValue)
    .then(() => {
      alert('Copy to clipboard')
    })
}
