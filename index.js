const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPassword = document.getElementById("pw1")
let secondPassword = document.getElementById("pw2")

function generatePassword() {
    let pw1 = ""
    let pw2 = "" 

    let passwordLength = document.getElementById("passwordLength").value
    let cbSymbols = document.getElementById("cbSymbols")
    let cbNumbers = document.getElementById("cbNumbers")

    if (cbSymbols.checked === true) {
      characters.splice(62, characters.length)
    }

    if (passwordLength === "") {
      for (let count = 0; count < 15; count++) {
        pw1 += characters[Math.floor(Math.random() * characters.length)]
        pw2 += characters[Math.floor(Math.random() * characters.length)]
      }
    } else {
      for (let count = 0; count < passwordLength; count++) {
        pw1 += characters[Math.floor(Math.random() * characters.length)]
        pw2 += characters[Math.floor(Math.random() * characters.length)]
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

// expose functions to the window object [Vite JS]

window.generatePassword = generatePassword
window.showOptions = showOptions