// Assignment Code
var generateBtn = document.querySelector("#generate");

//variables for characters
var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]
var digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var newPassword = "";
// Write password to the #password input

//empty array to pull from
var container = []


//object centralizing arrays to organize in if conditions
var userSelect = {
  upper: undefined,
  lower: undefined,
  num: undefined,
  spec: undefined,
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  //prompting user engagement to select characters
  var charInput= prompt("Please select between 8 and 128 characters.")
    if (charInput < 8 || charInput > 128) {
      alert("Selection was incorrect. Please select between 8 and 128 characters.")
        generatePassword()
    }
    //going through boolean values
  var userChoice= confirm("Would you like lowercase characters?")
    if (userChoice) {
      userSelect.lower= true
      container.push(lowCase)
    } else {
      userSelect.lower=false
    }
  var userChoice= confirm("Would you like uppercase characters?")
    if (userChoice) {
      userSelect.upper= true
      container.push(upperCase)
    }  else {
      userSelect.upper=false
    }
  var userChoice= confirm("Would you like numeric characters?")
    if (userChoice) {
      userSelect.digits= true
      container.push(digits)
    } else {
      userSelect.digits=false
    }
  var userChoice= confirm("Would you like special characters?")
    if (userChoice) {
      userSelect.spec= true
      container.push(specChar)
    } else {
      userSelect.spec=false
    }

    //condition making sure user selected at least one of 4 characters to generate password

if (userSelect.lower === false && userSelect.upper === false && userSelect.digits === false && userSelect.spec === false) {
    alert("Please select at least one character type.")
    generatePassword()
  }


numberGenerator(charInput)
  //return generatePassword()
var generatedPassword = newPassword
newPassword = ""
return generatedPassword
}

//loop help equate and selects what characters to use
function numberGenerator (x) {
for (let i = 0; i < x; i++) {
  var selectedChar = container[Math.floor(Math.random() * container.length)]
  newPassword = newPassword.concat(selectedChar[Math.floor(Math.random() * selectedChar.length) ])
}
return newPassword
}