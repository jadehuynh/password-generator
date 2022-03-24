// Assignment Code
var generateBtn = document.querySelector("#generate");


var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]
var digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var newPassword = "";
// Write password to the #password input
var container = []

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
  var charInput= prompt("Please select between 8 and 128 characters.")
    if (charInput < 8 || charInput > 128) {
      alert("Selection was incorrect. Please select between 8 and 128 characters.")
        generatePassword()
    }
  var userChoice= confirm("Would you like lowercase characters?")
    if (userChoice) {
      userSelect.lower= true
      container.push(lowCase)
      console.log(userSelect.lower)
    } else {
      userSelect.lower=false
      console.log(userSelect.lower);
    }
  var userChoice= confirm("Would you like uppercase characters?")
    if (userChoice) {
      userSelect.upper= true
      container.push(upperCase)
      console.log(userSelect.upper)
    }  else {
      userSelect.upper=false
      console.log(userSelect.upper);
    }
  var userChoice= confirm("Would you like numeric characters?")
    if (userChoice) {
      userSelect.digits= true
      container.push(digits)
      console.log(userSelect.digits)
    } else {
      userSelect.digits=false
      console.log(userSelect.digits);
    }
  var userChoice= confirm("Would you like special characters?")
    if (userChoice) {
      userSelect.spec= true
      container.push(specChar)
      console.log(userSelect.spec)
    } else {
      userSelect.spec=false
      console.log(userSelect.spec);
    }

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


function numberGenerator (x) {
for (let i = 0; i < x; i++) {
  var selectedChar = container[Math.floor(Math.random() * container.length)]
  newPassword = newPassword.concat(selectedChar[Math.floor(Math.random() * selectedChar.length) ])
}
return newPassword
}