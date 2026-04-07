// Number Guessing Game using do-while loop

let prompt = require("prompt-sync")();
let computer = Math.floor(Math.random() * 100 + 1);

let user;
let attempt = 0;

do {
  attempt++;
  user = Number(prompt("Enter a number between 1 and 100: "));
  if (computer > user) {
    console.log("Choose greater number");
  } else if (computer < user) {
    console.log("Choose smaller number");
  } else if (computer == user) {
    console.log(`Congratulation, You are selected! in ${attempt} attempt`);
    break;
  } else {
    console.log("Invalid number");
  }
} while (user != computer); //Jbh tkh User => computer ke barabaar nah ho, toh fir chalwana






//Sasta calculator
let prompt = require("prompt-sync")();
let n;

do{
  console.log("Enter 1 for addition")
  console.log("Enter 2 for subtraction")
  n = Number(prompt("Type number what you want: "))

  switch(n){
    case 1:{
      let a = Number(prompt("Enter first number: "))
      let b = Number(prompt("Enter second number: "))
      console.log("Addition" + (a+b));
      break;
    } 
    case 2:{
      let a = Number(prompt("Enter first number: "))
      let b = Number(prompt("Enter second number: "))
      console.log("Subtraction" + (a-b));
      break;
    } 
    default: console.log("Invalid number")

    
  }
  n = Number(prompt("Enter 10 if you want to restart: "))
}while(n==10)