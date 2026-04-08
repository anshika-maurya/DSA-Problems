//loops practice Questions 
//1. Harshad Number Check
//2. Abundant Number Checker
//3. Finding Prime factors of a number 
//4. Check if a number is a Neon Number
//5. Armstrong Number Checker






//1. Harshad Number Check

// let prompt = require('prompt-sync')()
// let n = prompt("Enter n: ")

// let copy = n;
// let sum = 0
// while(copy>0){
//     let dig = copy%10
//     sum += dig
//     copy = Math.floor(copy/10)
// }
// console.log(n%sum==0 ? "Harshad number" : "No Harshad number")





//2. Abundant Number 

// let prompt = require('prompt-sync')()
// let n = prompt("Enter n: ")

// let sum = 0;
// for(let i = 1; i<=n/2; i++){
//     if(n%i===0){
//         sum += i;
//     }    
// }
// console.log(sum>n ? "Yes" : "No")








// Kisi number ko prime numbers me todna

// 👉 Matlab:

// number = prime × prime × prime…

//number ko break kar rahe ho

//3. Finding Prime factors of a number 



// let prompt = require('prompt-sync')()
// let n = Number(prompt("Enter n: "))

// let copy = n
// let i = 2;

// while(copy>1){
//     if(copy%i===0){
//         copy = copy/i
//         console.log(i)
//     }else{
//         i++;
//     }
// }




 //4. Check if a number is a Neon Number

// let prompt = require('prompt-sync')()
// let n = Number(prompt("Enter n: "))

// let sq = n*n
// let sum = 0;

// while(sq>0){
//     let dig = sq%10
//     sum += dig
//     sq = Math.floor(sq/10)
// }
// console.log(sum===n ? "Yes" : "No")




//5. Armstrong Number Checker


// let prompt = require('prompt-sync')()
// let n = Number(prompt("Enter n: "))

// let copy = n;
// let second = copy;
// let count = 0;
// while(copy>0){
//     let dig = copy%10;
//     count++;
//     copy = Math.floor(copy/10)
// }
// console.log(count)
// let sum = 0;
// while(n>0){
//     let dig = n%10;
//     sum += Math.pow(dig, count)
//     n = Math.floor(n/10)
// }
// console.log(second===sum ? "Armstrong" : "Not Armstrong")