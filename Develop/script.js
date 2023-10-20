// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R','S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*']
var emptyArray = []

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {



  var passwordLength = prompt("password must be between 8 and 128 characters")

  if (passwordLength < 8) {
    alert('Pleae make sure your character is 8 or more characters long')

    return null

  }
  if (passwordLength > 128) {
    alert('Please make sure your character is less than 128 characters')

    return null
  }


  var containsUpper = confirm("Would you like uppercase characters in your password")
  var containslower = confirm("Would you like lower characters in your password")
  var containsNumeric = confirm("Would you like numeric characters in your password")
  var containssSpecial = confirm("Would you like special characters in your password")
  console.log(containsUpper, containslower, containsNumeric, containssSpecial)

  if (containsUpper === false && containslower === false && containsNumeric === false && containssSpecial === false) {

    alert('Please make sure to pick one character set ')
  }

  var combineArray = [];
  if (containsUpper === true) {
    combineArray = combineArray.concat(upperCase)

  }

  if (containslower === true) {
    combineArray = combineArray.concat(lowerCase)
  }

  if (containsNumeric === true) {
    combineArray = combineArray.concat(numbers)
  }


  if (containssSpecial === true) {
    combineArray = combineArray.concat(specialCharacters)
  }

  console.log('Combined Array: ', combineArray);




  var resultPW = [];

  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * combineArray.length)
    // console.log(randomIndex) //picking through the array to get random index
    var randomCharacter = combineArray[randomIndex]
    // console.log(randomCharacter) // applies that randomIndex to combineArray

    resultPW.push(randomCharacter)

    //how can i get a random index from an array
    //how can i add a random value to an empty array
    //how can i convert an array to a string
    //how can i return a string at the end of my array


  }

  

  resultPW = resultPW.join('');

  // console.log('Result: ', resultPW);





  // return what the password will be
  return resultPW;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);















//some revised notes


//var randomIndex = Math.floor(Math.random () * passwordLength) var randomCharacter = combineArray[random]
//  var randomIndex = Math.floor(Math.random() * combineArray.length) var randomCharacter = combineArray[randomIndex]
//for (var i=0;i<passwordLength; i++){

  //var randomIndex = Math.floor(Math.random() * combineArray.length) 
   //var randomCharacter = combineArray[randomIndex]
