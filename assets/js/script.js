var lower = "qwertyuiopasdfghjklzxcvbnm"
var upper = "QWERTYUIOPASDFGHJKLZXCVBNM"
var numbers = "1234567890"
var special = "!@#$^&*/+*%:~=><?"
var userChoice = ""


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// identifying and creating arguments for password

function generatePassword () {
  
  console.log ("Generating Password!")

  // Character Amount 8-128 
  var promptLength = window.prompt ("How many characters would you like your password to have?"); 
     // if else statements?? 
     
     // limit the amount of characters between 8-128--for loop statement?? 
     if (promptLength < 8 || promptLength > 128){
        window.alert ("Password length must be between 8 - 128 characters, please try again.")
        // restart prompt 
     return generatePassword();
      }



  //Uppercase Letters 
   var promptUpper = window.confirm ("Would you like uppercase letters? "); 
      if (promptUpper){
        userChoice += upper
        console.log(userChoice)
        //confirm  user wants uppercase and then add to outcome which will equal true  
        // create 'else' if player types 'NO' which would equal false
      }


  //Lowercase Letters 
   var promptLower = window.confirm ("Would you like lowercase letters?"); 
    if (promptLower){
      userChoice += lower
      console.log(userChoice) 
    }


  // Numbers 
   var promptNumber = window.confirm ("Would you like numbers?"); 
    if (promptNumber){
      userChoice += numbers
      console.log(userChoice)
    }

  //Symbols
   var promptSpecial = window.confirm ("Would you like special characters?"); 
     if (promptSpecial){
      userChoice += special
      console.log(userChoice)
  }


// for loop password lenght 
var finishedPassword = ""

for (let i = 0; i < promptLength; i++) {
  var randomNumber = Math.floor(Math.random () * userChoice.length)
  //console.log (randomNumber);


  finishedPassword += userChoice [randomNumber]
}

console.log(finishedPassword)

      return finishedPassword ;
}



// Write password to the #password input
function writePassword() {
var password = generatePassword();

// this shows the password connected to line 23 in HTML
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button - this button triggers the prompts & alerts 
generateBtn.addEventListener("click", () => {
  writePassword()
}); 
