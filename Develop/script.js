// Assignment code here


// Get references to the #generate element
 var generateBtn = document.querySelector("#generate");
 var passwordText = document.querySelector("#password");
 
   var lowercase = "abcdefghijklmnopqrstuvwxyz";
   var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var numeric = "0123456789";
   var special = "!#$%&()*+,-./;:<>=?@[/]^";
   
   // Add event listener to generate button
   generateBtn.addEventListener("click", writePassword);
   
   function writePassword() {
     
    var passwordChar = "";
    passwordText.value === "";
    var password = "";
    
  
   var lengthPass = prompt("Please enter length of password, 8-128");
  
    if (lengthPass < 8 || lengthPass > 128) {
     alert("password must contain at least 8 characters and less than 129 characters");
     return lengthChar;
   }
  
   var userLowercase = confirm("include lowercase characters?")
   if (userLowercase) {passwordChar += lowercase}

  var userUppercase = confirm("include uppercase characters?")
   if (userUppercase) {passwordChar += uppercase}

  var userNumeric = confirm("include numeric characters?")
   if (userNumeric) {passwordChar += numeric}

   var userSpecial = confirm("include special characters?")
   if (userSpecial) {passwordChar += special}

   for (var i = 0; i < lengthPass; i++) {
     password += passwordChar[Math.floor(Math.random() * passwordChar.length)];
   }
   passwordText.value = password;
  
  
 }

  


  