// let name = "Ranjeet";
// name[3] = 't'
// console.log(name)

// let arr = [1, 2, 3, 4, 5];
// arr[3] = 10;
// console.log(arr)

//slice(start, end)
// let s = "Sheryians";
// console.log(s.slice(0,5));

// let s = "Sheryians";
// console.log(s.slice(5));         //ending index nahi di

// let s = "Sheryians";
// console.log(s.slice(-3));

// let s = "Sheryians";
// console.log(s.slice(-3, -2));   //a

// let s = "Sheryians";
// console.log(s.slice(5, 2));    //kuch nahi aayega

// let s = "Sheryians";
// console.log(s.substring(5, 2));    //2,5   -> swap kardega

//trim()
// let s = "   Sheryians     ";
// s = s.trim();
// console.log(s.trim());

// indexOf(substring)

// let s = "sheryians";
// console.log(s.indexOf("ry"))

// Problems:
// Q.55 Accept a string from user and print its each character on a new line.

// let prompt = require('prompt-sync')()
// let s = prompt("Enter a string: ");

// for(let i = 0; i<s.length; i++){
//     console.log(s.charAt(i))
// }

// Q.56 Accept a string and print it in reverse order.

// let prompt = require('prompt-sync')()
// let s = prompt("Enter a string: ");
// let rev = "";

// for(let i = s.length; i>=0; i--){
//     rev += s.charAt(i);
// }
// console.log(rev)

// Q.57 Palindromic string using Two pointer algorithm (hint: Array reverse algo)

//1st way , actual string compare with reverse string. if is equal then is Palindromic, if not then is No Palindromic.

// let s = "madam";
// let rev = "";

// for(let i = s.length; i>=0; i--){
//     rev += s.charAt(i)
// }
// console.log(s===rev ? "Yes is Palindromic" : "No")

//2nd way -> Two pointer algo

// let s = "madam";

// let i = 0;
// let j = s.length-1;
// let isPalindromic = true;

// while(i<j){
//     if(s.charAt(i)!=s.charAt(j)){
//         isPalindromic = false;
//         break;
//     }
//     i++;
//     j--;
// }
// console.log(isPalindromic ? "Yes" : "No")

// Q.58 Toggle each alphabet of string In - AcgDFD , Output - aCGdFd

// let s = "AcgDFD";
// let ans = "";

// for(let i = 0; i<s.length; i++){
//     let ascii = s.charCodeAt(i);

//     if(ascii>=65 && ascii<=90){
//         ans += String.fromCharCode(ascii+32)
//     }else ans += String.fromCharCode(ascii-32);
// }
// console.log(ans)

//Q 59. Take an array of strings words and a string prefix. Print the number of strings in words that contain pref as a prefix. Example - Input: words = ["pay", "attention", "practice", "attend"], pref = "at", Output : 2

// let arr = ["pay", "attention", "practice", "attend"];
// let pref = "at";
// let count = 0;
// for(let i = 0; i<arr.length; i++){
//     if(arr[i].startsWith(pref)) count++;
// }
// console.log(count)

//Q 60 Capitalize first & last character of each word in the sentence and print the new sentence. Example- Hello bhai Kaise ho a , output-HellO BhaI KaisE HO A

// let s = "Hello bhai Kaise ho a";
// let arr = s.split(" ");
// let ans = ""
// for(let i = 0; i<arr.length; i++){
//     let word = arr[i];
//     if(word.length===1){
//         ans += word.toUpperCase();
//         continue;
//     }

//     let start = word.charAt(0).toUpperCase();
//     let mid = word.slice(1, word.length-1).toUpperCase();
//     let last = word.charAt(word.length-1).toUpperCase();
//     ans += (start+mid+last) + " ";
// }
// console.log(ans)



//Q 61 Accept a string and print the frequency of each character present in the string.

let s = "abAAcbaa";

let arr = new Array(128).fill(0);

console.log(arr)



//Q 62. Check Two Strings are Anagram or not Anagrams words have the same word length & same character count.
// Examples of anagram words are arc and car, state and taste, night and things etc.

//Q 63 Maximum number of words found in sentences.

//Q 64 Sort the words of the sentences
