//Print natural number from 1 to N

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter n: "));

// let output = "";
// for (let i = 1; i <= n; i++) {
//   output += i + " ";
// }
// console.log(output);





//Print natural numbers from N to 1

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter n: "));

// let output = "";
// for (let i = n; i >= 1; i--) {
//   output += i + " ";
// }
// console.log(output);








//Sum up to N terms

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter n: "));

// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum = sum + i;
// }
// console.log(sum)







//Factorial of a number

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter n: "));

// let result = 1;
// for (let i = 1; i <= n; i++) {
//   result = result * i;
// }
// console.log(result);






//Print All factors of a number

let prompt = require("prompt-sync")();
let n = Number(prompt("Enter n: "));

let output = "";
for (let i = 1; i <= n; i++) {
  if (n % i === 0) {
    output += i + " ";
  }
}
console.log(output);






//Sum of even and odd numbers in a range

// let prompt = require("prompt-sync")();
// let start = Number(prompt("Enter start number: "));
// let end = Number(prompt("Enter end number: "));

// let evenSum = 0;
// let oddSum = 0;
// for (let i = start; i <= end; i++) {
//   if (i % 2 === 0) {
//     evenSum += i;
//   } else {
//     oddSum += i;
//   }
// }
// console.log(evenSum, oddSum);
