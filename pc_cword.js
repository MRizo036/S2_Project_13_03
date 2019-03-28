"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 3

   Crossword Puzzle Script
   
   Author: Maria De Jesus Rizo
   Date:   3.25.19
   
   Global Variables
   ================
   allLetters
      References all of the letter cells in the crossword table#crossword
   
   currentLetter
      References the letter currently selected in the puzzleLetter
      
   wordLetters
      References the across and down letters in the word(s) associated with the current letter
   
   acrossClue
      References the across clue associated with the current letter
      
   downClue
      References the down clue associated with the current letter
      
         
   Functions
   =========
   
   init()
      Initializes the puzzle, setting up the event handlers and the variable values
       
   formatPuzzle(puzzleLetter)
      Formats the appearance of the puzzle given the selected puzzle letter
      
   selectLetter(e)
      Applies keyboard actions to select a letter or modify the puzzle navigation
      
   switchTypeDirection()
      Toggles the typing direction between right and down
      
   getChar(keyNum)
      Returns the text character associated with the key code value, keyNum


*/
//The block below creates a number of global variables which will be utilized later within the code functions. 
var allLetters;
var currentLetter;
var wordLetters;
var acrossClue;
var downClue;
var typeDirection = "right";

//The line below states that when the page is loaded in the browser, the init function will be run.
window.onload = init;

//The code block below creates a function with the name of init. This function will initialize the puzzle on the page and set up vatious event handlers.
function init() {
      //The line below assigns the variable allLetters to the value of the element that are affected by the selector of table#crossword span. 
      allLetters = document.querySelectorAll("table#crossword span");
      //The line below assigns the currentLetter variable to the value of the first index in the allLetters array.
      currentLetter = allLetters[0];
      //The line below assigns the variable acrossID to the value of the clueA dataset of currentLetter. 
      var acrossID = currentLetter.dataset.clueA;
      //The comment above applies here as well, the only difference being the variable and the clue.
      var downID = currentLetter.dataset.clueD;
      //The line below sets the value of the acrossClue variable to the element with an id of currentLetter.dataset.clueA. 
      acrossClue = document.getElementById(currentLetter.dataset.clueA);
      //The comment above applies to this as well, the only difference being the variable name and the id. 
      downClue = document.getElementById(currentLetter.dataset.clueD);
      //This line calls the formatPuzzle function
      formatPuzzle(currentLetter);
      //The for loop below states that he code within will continue to run as long as the value of the variable i is less than the length of the allLetters array. 
      for (var i = 0; i < allLetters.length; i++) {
            //The line below changes the cursor of the current allLetters value of pointer.
            allLetters[i].style.cursor = "pointer";
            //The line below states that when the mouse is pressed down on the currentvalue fo the allLetters array then an anonymus function will  be run. The anonymus function will run the formatPuzzle function with the parameter of e.target.
            allLetters[i].onmousedown = function (e) {
                  formatPuzzle(e.target);
            };
      }
      //The line bellow states that when the a key is pressed down on the keyboard, the selectLetter function will be run. 
      document.onkeydown = selectLetter;
      //This line creates a variable with the name of typeImage. The variable is then given the vallue of the element with an if of directionImg.
      var typeImage = document.getElementById("directionImg");
      //The line below changes the style of the cursor for the typeImage to a pointer.
      typeImage.style.cursor = "pointer";
      //The line below states that when the typeImage is clicked, the switchTypeDirection function will be run. 
      typeImage.onclick = switchTypeDirection;
      //The block below states that when the element with an id of showErrors is clicked, the anonymus function within the block will be run. This will be used to reveal the errors that the user has made in their answers, highlighting incorrect letters in red. 
      document.getElementById("showErrors").onclick = function () {
            //The for statement below states that the code block within will continue to run as long as the variale i is a value less than the length of the allLeters array.
            for (var i = 0; i < allLetters.length; i++) {
                  //The if statement below states that when the text content of the allLetters array does not equal the value of the letter in the dataset of the allLetters array's current value. 
                  if (allLetters[i].textContent !== allLetters[i].dataset.letter) {
                        //The line below states that the color of the allLetters current value will be red. 
                        allLetters[i].style.color = "red";
                        //The code block below ceates an anonymous function that will serve to conceal the errors the user has made after three seconds. 
                        setTimeout(function () {
                              //The for loop states that the code within will continue to run as long as the value of the i variable is less than the lenght of the allLetters array. 
                              for (var i = 0; i < allLetters.length; i++) {
                                    //The line below returns the color of the allLetters current value to normal. 
                                    allLetters[i].style.color = "";
                              }
                        }, 3000);
                  }
            }
      }
      //The block below states that when the element with an id of showSolution is clicked by the user, the anonymus function written within will be run. This is used to allow users to see the solutions for the crossword. 
      document.getElementById("showSolution").onclick = function () {
            //The for loop below states that the program within will continue to be run as long as the value of the variable i is less than the length of the allLetters array.
            for (var i = 0; i < allLetters.length; i++) {
                  //The line below states that the text content of the allLetters current value will be assigned to the value of letter in the dataset of the allLetters array's current value.
                  allLetters[i].textContent = allLetters[i].dataset.letter;
            }
      }
}

//The code block below creates a function with the name of formatPuzzle. The function is given the parameter of puzzleLetter. 
function formatPuzzle(puzzleLetter) {
      //The line below assigns the currentLetter variable the value of puzzleLetter.
      currentLetter = puzzleLetter;
      //The block below creates a for loop that will ontinue to run as long as the value of the variable i is less than the length of the allLetters array.
      for (var i = 0; i < allLetters.length; i++) {
            //The line below states that each time the loop is run the current allLetters value will have a background color removed, represented by the empty sting.
            allLetters[i].style.backgroundColor = "";
      }
      //The line below sets the color of the acrossClue variable to an empty sting. 
      acrossClue.style.color = "";
      //The coment above applies here as well, the only difference being that this affects the variable downClue. 
      downClue.style.color = "";

      //The code block below creates an if statement that will run if the value of currentLetter.dataset.clueA does not equal undefined. If the condition is true, than the code inside will be run. 
      if (currentLetter.dataset.clueA !== undefined) {
            //The line below states that the across clue variable will be assigned the value of the element with the id of currentLetter.dataset.clueA. 
            acrossClue = document.getElementById(currentLetter.dataset.clueA);
            //The line below sets the color of the acrossClue variable to blue. 
            acrossClue.style.color = "blue";
            //The line below sets the vale of the wordLetters variable to the value of the elements with the matcing selector of [data-clue-a =  currentLetter.dataset.clueA].
            wordLetters = document.querySelectorAll("[data-clue-a = " + currentLetter.dataset.clueA + "]");
            //The block below creats a for loop that will continue to run as long as the value of the i variable is less than the length of wordLetters.
            for (var i = 0; i < wordLetters.length; i++) {
                  //The line below states that the background color of the current wordLetters array value will be changed to the speciied rgb value. 
                  wordLetters[i].style.backgroundColor = "rgb(231, 231, 255)";
            }
      }
      //The comments from and within the prior if statement apply to this one as well. The only differnece between the two is that clue d is being affected rather than clue a and the color of the background in red instead. This also affects downClue rather than acrossClue.
      if (currentLetter.dataset.clueD !== undefined) {
            downClue = document.getElementById(currentLetter.dataset.clueD);
            downClue.style.color = "red";
            wordLetters = document.querySelectorAll("[data-clue-d = " + currentLetter.dataset.clueD + "]");

            for (var i = 0; i < wordLetters.length; i++) {
                  wordLetters[i].style.backgroundColor = "rgb(255, 231, 231)";

            }
      }

      //The if statement below states that if typeDirection is equal to the string of right then the backgroundColor of the currentLetter variable will be changed to the specified rgb value. Otherwise, the backgrund color will be set as the second rgb value specified. 
      if (typeDirection === "right") {
            currentLetter.style.backgroundColor = "rgb(191, 191, 255)";
      } else {
            currentLetter.style.backgroundColor = "rgb(255, 191, 191)";
      }
}

//The code block below creates a function with the name of selectLetter. This function is then passed the parameter of e.
function selectLetter(e) {
      // The variables below set their respective variables to the value of the element with an id of that specified within each of the parenthesis. Each variable serves a similar purpose of storing the element with the specified id which will be used later in order to allow for the puzzle to accept the users keyboard presses. 
      var leftLetter = document.getElementById(currentLetter.dataset.left);
      var upLetter = document.getElementById(currentLetter.dataset.up);
      var rightLetter = document.getElementById(currentLetter.dataset.right);
      var downLetter = document.getElementById(currentLetter.dataset.down);

      var userKey = e.keyCode;
      //The if statement block below provides commands for how the crossword should react when the user uses the keyboard keys. For each key on the keyboard, the page will react differently by moving the users cursor or writing a letter into the space. 
      if (userKey === 37) {
            formatPuzzle(leftLetter);
      } else if (userKey === 38) {
            formatPuzzle(upLetter);
      } else if (userKey === 39 || userKey === 9) {
            formatPuzzle(rightLetter);
      } else if (userKey === 40 || userKey === 13) {
            formatPuzzle(downLetter);
      } else if (userKey === 8 || userKey === 46) {
            currentLetter.textContent = "";
      } else if (userKey === 32) {
            switchTypeDirection();
      } else if (userKey >= 65 && userKey <= 90) {
            currentLetter.textContent = getChar(userKey);
            if (typeDirection === "right") {
                  formatPuzzle(rightLetter);
            } else {
                  formatPuzzle(downLetter);
            }
      }
      //The line below prevents the broswer from preforming the default actions that it would normally take in response to a keyboard click.
      e.preventDefault();
}
//The block below creates a function with the name of switchTypeDirection. The functions is not given any parameters.
function switchTypeDirection() {
      //The line below creates a variable with the name of typeImage. Is is then assigned the value pof the element with an id of directionImg.
      var typeImage = document.getElementById("directionImg");
      //The if statement below states that if the value of typeDirection is set equal to the string of rigth then the value of typeDirection will be changed to down, typeImage will be change to the image specified, and the background color of the  currentLetters variable will be changed to the color specified. Otherwise, typeDirection will be kept as right, the image will be changed to the one specified, and the backgroud color will be the rgb value specified. 
      if (typeDirection === "right") {
            typeDirection = "down";
            typeImage.src = "pc_down.png";
            currentLetter.style.backgroundColor = "rgb(255, 191, 191)";
      } else {
            typeDirection = "right";
            typeImage.src = "pc_right.png";
            currentLetter.style.backgroundColor = "rgb(191, 191, 255)";
      }
}



/*====================================================*/

function getChar(keyNum) {
      return String.fromCharCode(keyNum);
}