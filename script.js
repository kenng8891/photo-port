// Assignment Code
var generateBtn = document.querySelector("#generate");
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const Ualphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const special = ["!", "@", "#", "%", '^', "&", "*"]
var length 
var lowerletters
var upperletters
var symbols
var numbers1
var arrayinclude = []
var generatedpassword = ""

function criteria () {
  length = prompt("how long do you want your password to be?")
  //min password length
  if (length < 8) {
    alert("Password length needs to be at least 8 characters long");
    criteria();
  }
  //max password length
  else if (length > 50) {
    alert("Password length needs to be at shorter than 50 characters long");
    criteria();
  }
  //resetting generated password if generate password is clicked again
  generatedpassword = ""
  return length
}

//determine  if lower letters used
function criteriaLower() {
  lowerletters = confirm("do you want to have lower letters?");
return lowerletters;
}

//determine if captial letters used
function criteriaUpper() {
  upperletters = confirm("do you want to have upper letters?");
return upperletters;
  
}

//determine if numbers are used
function criterianumbers() {
  numbers1 = confirm("do you want to have numbers?");
return numbers1;
  
}

//determine if symbols are used
function criteriaSymbols() {
  symbols = confirm("do you want to have symbols?");
return symbols;
  
}

//using prompts to determine which characters are used in password
function createpassword () {
criteria();
criteriaLower();
criteriaUpper();
criterianumbers();
criteriaSymbols();

console.log(lowerletters, upperletters, numbers1, symbols)
//if lowercase = true
if (lowerletters) {
  arrayinclude = arrayinclude.concat(alphabet);
}
//if uppercase = true
if (upperletters) {
    arrayinclude = arrayinclude.concat(Ualphabet);
  }
  //if uppercase = true
if (numbers1) {
  arrayinclude = arrayinclude.concat(numbers);
  }
  //if uppercase = true
if (symbols) {
  arrayinclude = arrayinclude.concat(special);
}

for (i = 0; i < length; i++) {
  generatedpassword = generatedpassword + arrayinclude[Math.floor(Math.random()*arrayinclude.length)]
  }
  return generatedpassword
}
console.log(generatedpassword)

// Write password to the #password input
function writePassword() {
  var password = createpassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
