// Q.55 Accept a string from user and print its each character on a new line.

// let prompt = require('prompt-sync')()
// let s = prompt("Enter string: ");

// for(let i = 0; i<s.length; i++){
//     console.log(s[i])
// }

// Q.56 Accept a string and print it in reverse order.

// let prompt = require('prompt-sync')()
// let s = prompt("Enter string: ");
// let n = s.length-1
// for(let i = n; i>=0; i--){
//     console.log(s[i])
// }

//isse ulte charcater print hue.
// I want ki print na ho,
// 1 string ko reverse karke print karwao
//kya hora hai ==> 1 , 1 character pichse aara hai and print hora hai.
//I want , puri string ko reverse kardo

// Accept a string and print it in reverse order.

// let prompt = require("prompt-sync")();
// let s = prompt("Enter string: ");

// let rev = "";
// for (let i = s.length - 1; i >= 0; i--) {
//   rev += s.charAt(i);
// }
// console.log(rev);

// Q.57 Palindromic string using Two pointer algorithm (hint: Array reverse algo)

//1st way -> actual string and reverse string ko compare karsakte hai, same aaya toh palindromic.

// let s = "madam";

// let rev = "";
// for(let i = s.length-1; i>=0; i--){
//   rev = rev + s[i]
// }
// console.log(s==rev ? "Palindromic" : "Not Palindromic")


//2nd - two pointer

let s = "malayalam";

let i = 0; 
let j = s.length-1;
isPalindromic = true;

while(i<j){
  if(s.charAt(i)!=s.charAt(j)){
    isPalindromic = false;
    break;
  }
  i++;
  j--;
}
console.log(isPalindromic ? "Palindrome" : "Not Palindrome");

