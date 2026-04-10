// let prompt = require('prompt-sync')()

// let age = Number(prompt("Enter your age:"))

// console.log(age)

// let count = 0;
// for (let i = 2; i <= 20; i += 3) {
//     count++;
// }
// console.log(count);

//pattern programming

// let prompt = require("prompt-sync")();

// let n = Number(prompt("Enter a number: "));

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

//right angle triangle

// let prompt = require("prompt-sync")();

// let n = Number(prompt("Enter a number: "));

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// 2nd way
// let prompt = require("prompt-sync")();

// let n = Number(prompt("Enter a number: "));

// for (let i = 1; i <= n; i++) {
//   for (let j = i; j >= 1; j--) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

//1st way - inverted right angle triangle

// let prompt = require("prompt-sync")();

// let n = Number(prompt("Enter a number: "));

// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n-i+1; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

//2nd way
// let prompt = require("prompt-sync")();

// let n = Number(prompt("Enter a number: "));

// for (let i = n; i >= 1; i--) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// How do I generate alphabets? (ASCII / mapping)

//Right triangle Alaphabet pattern

// let prompt = require("prompt-sync")();

// let n = prompt("Enter a number: ");

// for(let i = 1; i<=n; i++){
//   for(let j = 1; j<=i; j++){
//     let charCode = 65 + (j-1);
//     let alphabet = String.fromCharCode(charCode);
//     process.stdout.write(alphabet+" ");

//   }
//   console.log()
// }

//mirror right triangle

// let prompt = require("prompt-sync")();

// let n = prompt("Enter a number: ");

// for(let i = 1; i<=n; i++){
//   for(let j = 1; j<=n-i; j++){
//     process.stdout.write("  ")
//   }
//   for(let j = 1; j<=i; j++){
//     process.stdout.write("* ")
//   }
//   console.log()
// }

//x print
// let prompt = require("prompt-sync")();

// let n = Number(prompt("Enter a number: "));

// for(let i = 1; i<=n; i++){
//   for(let j = 1; j<=n; j++){
//     if(i==j || (i+j==n+1)) process.stdout.write("* ");
//     else process.stdout.write("  ");
//   }
//   console.log()
// }


//Print a V-Shape Pattern
let prompt = require("prompt-sync")();

let n = Number(prompt("Enter a number: "));

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i == j) process.stdout.write("*");
    else process.stdout.write(" ");
  }
  for (let j = n - 1; j >= 1; j--) {
    if (i == j) process.stdout.write("*");
    else process.stdout.write(" ");
  }
  console.log();
}
