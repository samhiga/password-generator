// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var char ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&()*+,-./;:<>=?@[/]^"

// Write password to the #password input
function writePassword() {
 var length = prompt("Please enter length of password")
 var lowercase = prompt("include lowercase?")
 var uppercase = prompt("include uppercase?")
 var numeric = prompt("include numeric?")
 var specialCharacter = prompt("include special characters?")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // var password = choices[Math.floor(Math.random() * char.length)];

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
