// let prompt = require('prompt-sync')()

// let age = Number(prompt("Enter your age:"))

// console.log(age)

//swap via 3 methods

//1

// let a = 6;
// let b = 9;

// let temp = a
// a = b
// b = temp

// console.log(a, b)

//2
// let a = 6;
// let b = 9;

// [a,b] = [b, a]

// console.log(a, b)

//3
// let a = 6;
// let b = 9;

//   a = a+b           // a = 15
//   b = a-b           // b = 6
//   a = a-b           // a = 9

//   console.log(a,b)

// let count = 0;
// for (let i = 2; i <= 20; i += 3) {
//     count++;
// }
// console.log(count);



//loops practice Questions 


// Check if a number is a Strong Number
// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter n: "));

// let sum = 0;
// let temp = n;
// while (temp > 0) {
//   let rem = temp % 10;
  
//   let fact = 1;
//   for (let i = 1; i <= rem; i++) {
//     fact = fact * i;
//   }
//   sum += fact;
//   temp = Math.floor(temp / 10);
// }
// console.log(sum === n ? "Yes" : "No");


let i = 10;
while (i % 3 !== 0) {
    console.log(i);
    i--;
}




