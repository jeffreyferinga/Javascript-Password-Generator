  var lowerAlpha = Array.from("abcdefghijklmnopqrstuvwxyz");
  var upperAlpha = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  var numnum = Array.from("0123456789")
  var specialboys = Array.from("`~!@#$%^&*()-=[]\|/?><")

  var response = []

  function generatePassword() {
    var pLength = prompt('How many characters do you want in your password (8-128)?') //Gets how long the user wants the password
    
    if (!pLength){          //Cancels function if usere presses cancel
    return  
    }
    if(isNaN(pLength)){
      return
    }
    if (pLength < 8 || pLength > 128) {
      alert("Password must be between 8 and 128 characters!");  //Tells the user they have to select a number within the given range
      return
    }
    var Lower = confirm("Do you want lowercase letters in your password? (Ok for yes cancel for no)") //Asks the usser if they want lowercase letters
    var Upper = confirm('Do you want UPPERCASE letters in your password? (Ok for yes cancel for no)') //Asks the usser if they want uppercase letters
    var Num = confirm('Do you want numbers in your password? (Ok for yes cancel for no)') //Asks the usser if they want numbers
    var Special = confirm('Do you want special characters in your password? (Ok for yes cancel for no)') //Asks the usser if they want special characters

    response = [];

    if (Lower === true) {
      response = response.concat(lowerAlpha)  //Adds Lowercase letters to password if confirmed
    }
    if (Upper === true) {
      response = response.concat(upperAlpha)  //Adds uppercase letters to password if confirmed
    }
    if (Num === true) {
      response = response.concat(numnum)  //Adds numbers to password if confirmed
    }
    if (Special === true) {
      response = response.concat(specialboys) //Adds special characters to password if confirmed
    }
    if (Lower == false && Upper == false && Num == false && Special == false) {
      alert('please choose one type of character for your password try again')
      location.reload();//refreshes page if they fail to select any of the prompts
      return
    }

    var pass = "";  //Randomizes the password based on selecting a random number and random array from the chosen characters.
    for (i = 0; i < pLength; i++) {
      var randomNum = Math.floor(Math.random() * response.length);
      pass = pass + response[randomNum];
    }
console.log(pass)
    return pass;

  }




  // Assignment Code
  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
