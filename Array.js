//Array
//Introduction

//# syntax
// let arr = []


//# push, pop, unshift, shift methods

// let arr = [10, 20, 30, 40, 50];
// arr.push(60)    // inserting from last
// arr.pop()       // deleting from last
// arr.unshift(5)  //inserting from first
// arr.shift()     //deleting from start
// console.log(arr[4])



//#  1 - 1 karke array ke saare elements print karwane hai

// let arr = [10, 20, 30, 40, 50];
// for(let i = 0; i<=arr.length; i++){
//     console.log(arr[i])
// }



//# I want initially declare hojaye lekin value na ho 
// let arr = new Array(3);
// console.log(arr.length)         //3




//# Array ki size fized nahi hoti , dynamic hoti hai
// arr = new Array(3).fill(true);
// console.log(arr)
// //re-assign is possible.
// arr[0] = 10;
// arr[1] = 20;
// arr[2] = 30;
// arr[3] = 40;
// console.log(arr)




//# Array mei multiple types ki value de sakte hai
// let arr = [100, "Hello", true, {}]
// console.log(arr)



