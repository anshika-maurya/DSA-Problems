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

// let s = "malayalam";

// let i = 0; 
// let j = s.length-1;
// isPalindromic = true;

// while(i<j){
//   if(s.charAt(i)!=s.charAt(j)){
//     isPalindromic = false;
//     break;
//   }
//   i++;
//   j--;
// }
// console.log(isPalindromic ? "Palindrome" : "Not Palindrome");



// Q.58 Toggle each alphabet of string In - AcgDFD , Output - aCGdFd

// let s = "AcgDFD";
// let ans = "";

// for(let i = 0; i<s.length; i++){
//   let ascii = s.charCodeAt(i);
//   if(ascii>=65 && ascii<=90){
//     ans += String.fromCharCode(ascii+32)
//   }else ans += String.fromCharCode(ascii-32)
//   }
// console.log(ans)


//Q 59. Take an array of strings words and a string prefix. Print the number of strings in words that contain pref as a prefix. Example - Input: words = ["pay", "attention", "practice", "attend"], pref = "at", Output : 2

// let words = ["pay", "attention", "practice", "attend"];
// let pref = "at"
// let count = 0;
// for(let i = 0; i<words.length; i++){
//   if(words[i].startsWith(pref)) count++;
// }
// console.log(count)



//Q 60 Capitalize first & last character of each word in the sentence and print the new sentence. Example- Hello bhai Kaise ho a , output-HellO BhaI KaisE HO A

// let s = "Hello bhai Kaise ho a";
// let arr = s.split(" ");
// let ans = "";

// for(let i = 0; i<arr.length; i++){
//   let word = arr[i];
//   if(word.length===1){
//     ans += word.toUpperCase() +" ";
//     continue;
//   }
//   let first = word.charAt(0).toUpperCase()
//   let mid = word.substring(1, word.length-1)
//   let end = word.charAt(word.length-1).toUpperCase()
//   ans = ans + (first + mid + end) + " ";
// }
// console.log(ans)



//Q 61 Accept a string and print the frequency of each character present in the string.

// let s = "naman";
// let arr = new Array(128).fill(0);

// for(let i = 0; i<s.length; i++){
//   let ascii = s.charCodeAt(i);
//   arr[ascii] = arr[ascii] + 1;
// }

// for(let i = 0; i<arr.length; i++){
//   if(arr[i]>0) console.log(String.fromCharCode(i) +"->"+ arr[i])
// }



//agar khali lower case hai toh 

// let s = "malayalam";
// let arr = new Array(26).fill(0);

// for(let i = 0; i<s.length; i++){
//   let ascii = s.charCodeAt(i);
//   arr[ascii-97] = arr[ascii-97] + 1;
// }

// for(let i = 0; i<arr.length; i++){
//   if(arr[i]>0) console.log(String.fromCharCode(i+97) +"->"+ arr[i])
// }


//Q 62. Check Two Strings are Anagram or not Anagrams words have the same word length & same character count.
// Examples of anagram words are arc and car, state and taste, night and things etc.

//agar khali lower case hai toh 

// let s = "malayalam";
// let arr = new Array(26).fill(0);

// for(let i = 0; i<s.length; i++){
//   let ascii = s.charCodeAt(i);
//   arr[ascii-97] = arr[ascii-97] + 1;
// }

// for(let i = 0; i<arr.length; i++){
//   if(arr[i]>0) console.log(String.fromCharCode(i+97) +"->"+ arr[i])
// }


