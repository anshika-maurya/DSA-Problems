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

let prompt = require('prompt-sync')()
let s = prompt("Enter string: ");

let rev = "";
for(let i = s.length-1; i>=0; i--){
    rev += s.charAt(i)
}
console.log(rev)
// Q.57 Palindromic string using Two pointer algorithm (hint: Array reverse algo)


