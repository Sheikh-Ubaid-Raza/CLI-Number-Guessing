#! /usr/bin/env node

import inquirer from "inquirer"

let randomNumber = Math.floor(Math.random()*6 + 1); 

const answer = await inquirer.prompt([{
    name:"userGuessedNumber",
    message:"Enter Your Guessed Number Between 1 to 6 : ",
    type:"number"
}]);

if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulation🎉! Your Guess Number is Correct.");
}else{
    console.log("Ahh😔! Your Guess Number is Wrong.");   
}