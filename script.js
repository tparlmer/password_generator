// Global Scope, Password Character Options
var keys = {
    upperCaseChars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCaseChars: "abcdefghijklmnopqrstuvwxyz",
    numberChars: "1234567890",
    specialChars: "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
  }
  
  var generatePassword = function() {
    window.alert("HI! LETS MAKE A PASSWORD!")
    
    // generate a random number from 0 to the length of string -01 and then return the character at the index value of that random number on the string
  
    /* START USER INPUT */
  
    // START numberChar
    // Prompt for length of password, 8-128 characters ("choose your amount of characters")
    // validate input
    // prompt -> store in variable(s)
    var numberChar = window.prompt("Choose amount of password characters between '8' and '128' by typing a number into the input field");
    if (numberChar < 8 || numberChar > 128) {
      window.alert("Enter valid input");
      return ""; // ASK ABOUT THIS IN OFFICE HOURS
    }
  
    // START lowercaseChar
    // Prompt if user wants to use lowercase characters
    // validate input - choose one type of special character
    // prompt -> store in variables(s)
    var useLowerCase = false
    var lowerCaseChar = window.prompt("Do you to include lowercase characters? Enter 'YES' or 'NO'");
    if (lowerCaseChar === "YES") {
      useLowerCase = true;
    } 
  
    // START uppercaseChar
    // Prompt if user wants to use uppercase characters
    // validate input - choose one type of special character
    // prompt -> store in variables(s)
    var useUpperCase = false
    var upperCaseChar = window.prompt("Do you to include uppercase characters? Enter 'YES' or 'NO'");
    if (upperCaseChar === "YES") {
      useUpperCase = true;
    }
  
    // Prompt if user wants to use numeric characters
    // validate input - choose one type of special character
    // prompt -> store in variables(s)
    var useNumeric = false
    var numericChar = window.prompt("Do you to include numeric characters? Enter 'YES' or 'NO'");
    if (numericChar === "YES") {
      useNumeric = true;
    }
  
    // Prompt if user wants to use special characters
    // validate input - choose one type of special character
    // prompt -> store in variables(s)
    var useSpecial = false
    var specialChar = window.prompt("Do you to include special characters? Enter 'YES' or 'NO'");
    if (specialChar === "YES") {
      useSpecial = true;
    }
  
    /* END USER INPUT */
    var randomPassword = "";
    var numCharacterTypes = 0
    var combineCharacters = "";
    
    if (useLowerCase) {
      combineCharacters = combineCharacters.concat(keys.lowerCaseChars);
      var randomIndex = Math.floor(Math.random() * keys.lowerCaseChars.length);
      randomPassword = randomPassword + keys.lowerCaseChars[randomIndex];
      numCharacterTypes++;
    }
  
    if (useUpperCase) {
      combineCharacters = combineCharacters.concat(keys.upperCaseChars);
      var randomIndex = Math.floor(Math.random() * keys.upperCaseChars.length);
      randomPassword = randomPassword + keys.upperCaseChars[randomIndex];
      numCharacterTypes++;
    }
  
    if (useNumeric) {
      combineCharacters = combineCharacters.concat(keys.numberChars);
      var randomIndex = Math.floor(Math.random() * keys.numberChars.length);
      randomPassword = randomPassword + keys.numberChars[randomIndex];
      numCharacterTypes++;
    }
  
    if (useSpecial) {
      combineCharacters = combineCharacters.concat(keys.specialChars);
      var randomIndex = Math.floor(Math.random() * keys.specialChars.length);
      randomPassword = randomPassword + keys.specialChars[randomIndex];
      numCharacterTypes++;
    }
    
    if (numCharacterTypes === 0) {
      window.alert("You must choose at least one type of characters!");
      return "";
    }
  
    for(var i = 0; i < numberChar - numCharacterTypes; i++) {
      var randomIndex = Math.floor(Math.random() * combineCharacters.length);
      randomPassword = randomPassword + combineCharacters[randomIndex];
    }
    return randomPassword;
  }
  
  // Get references to the #generate element
  // links red button to the html button with id=generate
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  // "When you click the red button, writePassword() function will execute"
  generateBtn.addEventListener("click", writePassword);