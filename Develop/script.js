// Assignment code here


// Get references to the #generate element
 var generateBtn = document.querySelector("#generate");
 var passwordText = document.querySelector("#password");
 
   var lowercase = "abcdefghijklmnopqrstuvwxyz";
   var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var numeric = "0123456789";
   var special = "!#$%&()*+,-./;:<>=?@[/]^";
   var passwordVal = "";

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

   function writePassword() {
  
    passwordText.value = "";
    var password = "";
  
   var lengthPass = prompt("Please enter length of password, 8-128");
  
    if (lengthPass < 8 || lengthPass > 128) {
     alert("password must contain at least 8 characters and less than 129 characters");
     return lengthChar;
   }
  
   var userLowercase = confirm("include lowercase characters?")
   if (userLowercase) {passwordVal += lowercase}

  var userUppercase = confirm("include uppercase characters?")
   if (userUppercase) {passwordVal += uppercase}

  var userNumeric = confirm("include numeric characters?")
   if (userNumeric) {passwordVal += numeric}

   var userSpecial = confirm("include special characters?")
   if (userSpecial) {passwordVal += special}

   for (var i = 0; i < lengthPass; i++) {
     password += passwordVal[Math.floor(Math.random() * passwordVal.length)];
   }
   passwordText.value = password;
  
  
 }

  


  