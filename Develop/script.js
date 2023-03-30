// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// var char ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&()*+,-./;:<>=?@[/]^"
var char = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numeric: "0123456789",
  special: "!#$%&()*+,-./;:<>=?@[/]^"

}
// Write password to the #password input
function writePassword() {
 var length = prompt("Please enter length of password, 8-128")
//  var lowercase = prompt("include lowercase?")
//  var uppercase = prompt("include uppercase?")
//  var numeric = prompt("include numeric?")
//  var specialCharacter = prompt("include special characters?")
var password = generatePassword();
var passwordText = document.querySelector("#password");
// var password = choices[Math.floor(Math.random() * char.length)];
passwordText.value = password;


if (length < 8 && length > 128) {
  alert("password must contain at least 8 characters and less 129 characters");
  return length;
}

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
