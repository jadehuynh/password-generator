// Assignment Code
var generateBtn = document.querySelector("#generate");


var lowCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]
var digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
// Write password to the #password input
var userSelect = {
  upper: false,
  lower: false,
  num: false,
  spec: false,
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
function generatePassword() {
  var charInput= prompt("Please select between 8 and 128 characters.")
    if (charInput < 8 || charInput > 128) {
      alert('Selection was incorrect. Please select between 8 and 128 characters.')
        generatePassword()
    }
var userChoice= confirm("Would you like lowercase characters?")
    if (userChoice) {
      userSelect.lower= true
      console.log(userChoice.lower)
    }
var userChoice= confirm("Would you like uppercase characters?")
    if (userChoice) {
      userSelect.upper= true
      console.log(userChoice.upper)
    }
var userChoice= confirm("Would you like numeric characters?")
    if (userChoice) {
      userSelect.num= true
      console.log(userChoice.num)
    }
var userChoice= confirm("Would you like special characters?")
    if (userChoice) {
      userSelect.spec= true
      console.log(userChoice.spec)
    }
  console.log(charInput)
  return;
}



generateBtn.addEventListener("click", writePassword);
