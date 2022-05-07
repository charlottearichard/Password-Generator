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

const getKey = [
  function upperCase() {
    return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
  },
  function lowerCase() {
    return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
  },
  function number() {
    return keys.number[Math.floor(Math.random() * keys.number.length)];
  },
  function symbol() {
    return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
  },
  
];



function generatePassword () {
  
  console.log ("Generating Password!")
  
  // Character Amount 8-128 
    window.prompt ("How many characters would you like your password to have?"); 


  // Upper & Lower Characters 
    window.alert ("Do you want your password to have upper and lowercase letters?");
      const upper = document.getElementById("upperCase").checked;
      const lower = document.getElementById("lowerCase").checked;

  // Numbers or no numbers 
    window.alert ("Would you like your passord to have numbers?"); 
      const number = document.getElementById("number");


  //Special Characters
    window.alert ("Do you want your password to have special characters?");
      const symbol = document.getElementById("symbol");
  
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
