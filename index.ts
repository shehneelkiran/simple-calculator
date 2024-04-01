#! /usr/bin/env node

import inquirer from "inquirer"; 

const answer = await inquirer.prompt([
  { message: "Enter First number", type: "number", name: "firstNumber" },
  { message: "Enter Second number", type: "number", name: "SecondNumber" },
  {
    message: "Select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Substraction", "Multiplication", "Division"],
  },
]);

//Condition statement

if(answer.operator==="Additon"){
  console.log(answer.firstNumber + answer.SecondNumber);
  
} else if (answer . operator  === "Substraction") {
  console.log( answer.firstNumber - answer.SecondNumber);

}else if (answer . operator  === "Multiplication") {
  console.log( answer.firstNumber * answer.SecondNumber);

}else if (answer . operator  === "Division") {
  console.log( answer.firstNumber / answer.SecondNumber);
}else{
  console.log("Please Select Valid Operators")
}

