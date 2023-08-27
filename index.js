const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPassword = document.getElementById("pw1")
let secondPassword = document.getElementById("pw2")

// Document text areas for copying password to clipboard

let textAreaFirst = document.createElement("textarea")
let textAreaSecond = document.createElement("textarea")


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

    // Splice character types depending on options set by the user

    if (cbSymbols.checked === true && cbNumbers.checked === false) {
      newCharList.splice(62, newCharList.length)
    } else if(cbNumbers.checked === true && cbSymbols.checked === false) {
      newCharList.splice(52, 10)
    } else if (cbSymbols.checked === true && cbNumbers.checked === true) {
      newCharList.splice(52, newCharList.length)
    } 

    // Set password length from input field
    
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

// Set to hidden by default

function showOptions(){
    let options = document.getElementById("optionsSelection")
    let optionsBtn = document.getElementById("optionsBtn")

    if (options.style.display === "none") {
      options.style.display = "flex"
      options.style.flexDirection = "column"
      options.style.justifyContent = "start"
      options.style.alignItems = "start"
      optionsBtn.style.background = "#992831"
    } else {
      options.style.display = "none"
      optionsBtn.style.background = "#f3404f"
    }
}

function copyPassword() {

  let copiedFirstPassword = firstPassword
  let copiedSecondPassword = secondPassword

  // Text areas initially made are called, selected, copied their values and immediately removed (so not to leave text areas continuely forming every time password area is clicked.)

  if (copiedFirstPassword.textContent === "") {
    toastFunction("You must first generate a password.")
  } else {
    copiedFirstPassword.addEventListener("click", () => {
      textAreaFirst.value = copiedFirstPassword.textContent
      document.body.appendChild(textAreaFirst)
      textAreaFirst.select();
      document.execCommand("Copy")
      textAreaFirst.remove()
      toastFunction("Password #1 copied!")
    })
    copiedSecondPassword.addEventListener("click", () => {
      textAreaSecond.value = copiedSecondPassword.textContent
      document.body.appendChild(textAreaSecond)
      textAreaSecond.select();
      document.execCommand("Copy")
      textAreaSecond.remove()
      toastFunction("Password #2 copied!")
    })
  }
} 

function toastFunction(toastMessage) {
  var toastPopup = document.getElementById("toast");
  toastPopup.className = "show";
  setTimeout(function(){ toastPopup.className = toastPopup.className.replace("show", ""); }, 3000);
  toastPopup.textContent = toastMessage;
}

// expose functions to the window object [Vite JS]

window.generatePassword = generatePassword
window.showOptions = showOptions
window.copyPassword = copyPassword
window.toastFunction = toastFunction