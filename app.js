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

//loop Problems part-1

//Q 17. Accept an integer and Print hello world n times.

// let prompt = require('prompt-sync')()

// let n = Number(prompt("Enter number: "))

// for(let i = 1; i<=n; i++){
//   console.log("Hello world!")
// }

//Q 18. Print natural number up to n.

// let prompt = require('prompt-sync')()

// let n = Number(prompt("Enter number: "))
// let output = "";
// for(let i = 1; i<=n; i++){
//   output += i + " ";
// }
// console.log(output)

//Q 19. Reverse for loop. Print n to 1.

// let prompt = require('prompt-sync')()

// let n = Number(prompt("Enter number: "))
// let output = "";
// for(let i = n; i>=1; i--){
//   output += i + " ";
// }
// console.log(output)

//Q 20. Take a number as input and print its table.
//5 * 1 = 5
//5 * 2 = 10 ... up to 10 terms.

// let prompt = require('prompt-sync')()

// let n = Number(prompt("Enter number: "))

// for(let i = 1; i<=10; i++){
//   console.log(`${n} * ${i} = ${n*i}`)
// }

//Q 21. Sum up to n terms.

// let prompt = require('prompt-sync')()

// let n = Number(prompt("Enter number: "))

// let sum = 0;
// for(let i = 1; i<=n; i++){
//   sum = sum + i;
// }
// console.log(sum)

//Q 22. Factorial of a number.

// let prompt = require('prompt-sync')()

// let n = Number(prompt("Enter number: "))

// let result = 1;
// for(let i = 1; i<=n; i++){
//   result = result * i;
// }
// console.log(result)

//Q 23. Print the sum of all even & odd numbers in a range.

// let prompt = require('prompt-sync')()

// let start = Number(prompt("Enter start number: "))
// let end = Number(prompt("Enter end number: "))

// let evenSum = 0;
// let oddSum = 0;
// if(start>end){
//   start = start+end;
//   end = start-end;
//   start = start-end;
// }
// for(let i = start; i<=end; i++){
//   if(i%2===0){
//     evenSum += i;
//   }else{
//     oddSum += i;
//   }
// }
// console.log(`Sum of even numbers ${evenSum}`)
// console.log(`Sum of odd numbers ${oddSum}`)

//Q 24. Print all the factors of a number.

// let prompt = require('prompt-sync')()

// let n = Number(prompt("Enter a number: "))
// for(let i = 1; i<=n/2; i++){
//   if(n%i==0)process.stdout.write(i+" ")
// }
// console.log(n)

//Q 25. Check if the number is prime or not.

//1st way - exact 2 hi multiple milne chiye , count karege multiples (2)

// let prompt = require('prompt-sync')()
// let n = Number(prompt("Enter a number: "))

// let count = 0;
// for(let i = 1; i<=n; i++){
//   if(n%i==0)count++;
// }

// if(count==2) console.log("Prime")
// else console.log("Not Prime")

//2nd - efficiency, aur chota karenge

// let prompt = require("prompt-sync")();
// let n = Number(prompt("Enter a number: "));

// if (n <= 1) console.log("Not Prime");
// else {
//   let count = 0;
//   for (let i = 2; i <= n / 2; i++) {
//     if (n % i == 0) count++;
//   }

//   if (count == 0) console.log("Prime");
//   else console.log("Not Prime");
// }

// 3rd way -> best


//Check if the number is prime or not

let prompt = require("prompt-sync")();
let n = Number(prompt("Enter a number: "));

if (n <= 1) console.log("Not Prime");
else if (n == 2) console.log("Prime");
else if (n % 2 == 0) console.log("Not Prime");
else {
  let isPrime = true;
  for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
    if (n % i == 0) {
      isPrime = false;
      break;
    }
  }
  console.log(isPrime ? "Prime" : "Not Prime");
}
