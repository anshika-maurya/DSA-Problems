//While loop

//Q 27. Sum of digit
//Q 28. reverse of number
//Q 29. Strong number
//Q 30. Automorphic number

//Separate digit and printed

// let prompt = require('prompt-sync')()
// let n = Number(prompt("Enter a number: "))
// while(n>0){
//   let rem = n%10
//   console.log(rem)
//   n = Math.floor(n/10)
// }

//reverse of number
// let prompt = require('prompt-sync')()
// let n = Number(prompt("Enter a number: "))

// let rev = 0;
// while(n>0){
//   let rem = n%10
//   rev = (rev*10) + rem
//   n= Math.floor(n/10)
// }
// console.log(rev)




// Reverse a number using while loop
// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter a number: "));

// let reverse = 0;
// while (n > 0) {
//   reverse = reverse * 10 + (n % 10);
//   n = Math.floor(n / 10);
// }
// console.log(reverse);



//sum of digit

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter a number: "));

// let sum = 0;
// while(n>0){
//   let rem = n%10
//   console.log(rem)
//   sum += rem
//   n = Math.floor(n/10)
// }
//  console.log("sum: " + sum)





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





//ISBN
// let prompt = require('prompt-sync')()
// let n = prompt("Enter n: ")


// let copy = n;
// // let count = 0;
// // while(n>0){
// //     count++;
// //     n = Math.floor(n/10)
// // }
// let count = n.length
// console.log(count)
// if(count!=10) console.log("Invalid ISBN");
// else{
    
//     let ans = 0;
//     while(copy>0){
//     let digit = copy%10
//     ans = ans + (digit*count)         //place = 10 , count = 10
//     count--;
//     copy = Math.floor(copy/10)
// }
// console.log((ans%11===0) ? "ValidISBN" : "InvalidISBN" )

// }



//Automorphic number

// let prompt = require('prompt-sync')()
// let n = prompt("Enter n: ")

// let copy = n;
// let count = 0;
// let sq = n*n
// while(n>0){
//     count++;
//     n = Math.floor(n/10)
// }
// if(sq%Math.pow(10, count)==copy){
//     console.log('Automorphic Number')
// }else{
//     console.log('No Automorphic Number')
// }