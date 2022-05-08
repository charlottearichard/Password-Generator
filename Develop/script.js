// Assignment code here
const keys = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "!@#$%^&*()_+~?/}{.,><="
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// identifying and creating arguments for password

function generatePassword () {
  
  console.log ("Generating Password!")
  
  // Character Amount 8-128 
    window.prompt ("How many characters would you like your password to have?"); 


  // Upper & Lower Characters 
    window.alert ("Do you want your password to have upper and lowercase letters?");
      
  // Numbers or no numbers 
    window.alert ("Would you like your passord to have numbers?"); 


  //Special Characters
    window.alert ("Do you want your password to have special characters?");
  
      return "Generated Password";
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  // this shows the password 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button - this button triggers the prompts & alerts 
generateBtn.addEventListener("click", writePassword);
