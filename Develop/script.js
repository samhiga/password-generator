// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// var char ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&()*+,-./;:<>=?@[/]^"
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0123456789";
  var special = "!#$%&()*+,-./;:<>=?@[/]^";


// Write password to the #password input
function generatePassword(){
  var password = "";
  var passwordCharacter = "";
  
  var length = prompt("Please enter length of password, 8-128");
  length = parseInt(length)
  //  var lowercase = prompt("include lowercase?")
  //  var uppercase = prompt("include uppercase?")
  //  var numeric = prompt("include numeric?")
  //  var specialCharacter = prompt("include special characters?")
  // var password = choices[Math.floor(Math.random() * char.length)];
  
  
  if (length < 8 || length > 128) {
    alert("password must contain at least 8 characters and less than 129 characters");
    return length;
  }
  
  var userLowercase = confirm("include lowercase characters?")
  if (userLowercase) {password += lowercase}

  var userUppercase = confirm("include uppercase characters?")
  if (userUppercase) {password += uppercase}

  var userNumeric = confirm("include numeric characters?")
  if (userNumeric) {password += numeric}

  var userSpecial = confirm("include uppercase characters?")
  if (userSpecial) {password += Special}

  
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  