const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPassword = document.getElementById("pw1")
let secondPassword = document.getElementById("pw2")

function generatePassword() {
    let pw1 = ""
    let pw2 = "" 

    let passwordLength = document.getElementById("passwordLength").value
    let cbSymbols = document.getElementById("cbSymbols")
    let cbNumbers = document.getElementById("cbNumbers")
    let newCharList = []
    let count = -1;

    while (++count < characters.length) {
      newCharList[count] = characters[count];
    }

    if (cbSymbols.checked === true && cbNumbers.checked === false) {
      newCharList.splice(62, newCharList.length)
    } else if(cbNumbers.checked === true && cbSymbols.checked === false) {
      newCharList.splice(52, 10)
    } else if (cbSymbols.checked === true && cbNumbers.checked === true) {
      newCharList.splice(52, newCharList.length)
    } 

    if (passwordLength === "") {
      for (let count = 0; count < 15; count++) {
        pw1 += newCharList[Math.floor(Math.random() * newCharList.length)]
        pw2 += newCharList[Math.floor(Math.random() * newCharList.length)]
      }
    } else {
      for (let count = 0; count < passwordLength; count++) {
        pw1 += newCharList[Math.floor(Math.random() * newCharList.length)]
        pw2 += newCharList[Math.floor(Math.random() * newCharList.length)]
      }
    }

    firstPassword.textContent = pw1
    secondPassword.textContent = pw2
}

function showOptions(){
    let options = document.getElementById("optionsSelection")
    let optionsBtn = document.getElementById("optionsBtn")

    if (options.style.display === "none") {
      options.style.display = "flex"
      optionsBtn.style.background = "#992831"
    } else {
      options.style.display = "none"
      optionsBtn.style.background = "#f3404f"
    }
}

function copyPassword() {
  let text = firstPassword.textContent

  if (text === "") {
    console.log("You must first generate a password.")
  } else {
    if (firstPassword.click) {
      console.log("This works..")
      navigator.clipboard.writeText(text)
    } else if (secondPassword.click) {
      console.log("This works too..")
      navigator.clipboard.writeText(text)
    }
  } 
}

// expose functions to the window object [Vite JS]

window.generatePassword = generatePassword
window.showOptions = showOptions
window.copyPassword = copyPassword