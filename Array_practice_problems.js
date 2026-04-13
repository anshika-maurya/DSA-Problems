//Array Practice Problems

//# Accept value from user and assign in the array.

// let prompt = require('prompt-sync')()
// let n = Number(prompt("Enter the size of array: "));

// let arr = new Array(n);

// for(let i = 0; i<arr.length; i++){
//     arr[i] = Number(prompt("Enter a value: ") )
// }
// console.log(arr)

//Q 43  Sum of array's  element

// let prompt = require('prompt-sync')()
// let n = Number(prompt("Enter the size of array: "));

// let arr = new Array(n)

// let sum = 0;
// for(let i = 0; i<arr.length; i++){
//     arr[i] = Number(prompt("Enter value: "))
//     sum += arr[i]
// }
// console.log(sum)

//Q.44 Max element from array

// let arr = [20, 30, 40, 50, 10, 555, 54];
// let max = arr[0];
// for(let i = 1; i<arr.length; i++){
//     if(max<arr[i]){
//         max = arr[i]
//     }

// }
// console.log(max)

// Q 45  Second max element from array.

// let arr = [8, 12, 5, 16, 45, 95, 63, 100];

// let max = Math.max(arr[0], arr[1]);
// let secondMax = Math.min(arr[0], arr[1]);

// for(let i = 2; i<arr.length; i++){
//     if(arr[i]>max){
//         secondMax = max;
//         max = arr[i];
//     }else if(arr[i]>secondMax && arr[i]!=max){
//         secondMax = arr[i];
//     }
// }
// console.log(secondMax)

//Q. Reverse the array

//1st way ->  With extra spaces
// let arr = [8, 12, 5, 16, 100];

// let temp = new Array(arr.length);

// let i = arr.length-1;

// for(let j=0; j<temp.length;j++){
//     temp[j] = arr[i];
//     i--;
// }
// console.log(arr)
// console.log(temp)

//2nd way -> Without Extra space

// let arr = [8, 12, 5, 16, 100];
// let i = 0;
// let j = arr.length-1;

// while(i<j){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;
// }
// console.log(arr)

//Q 47. All zeros to left and all ones to right.

// let arr = [0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0];

// let i = 0;
// let j = 0;

// while (i < arr.length) {
//   if (arr[i] == 0) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j++;
//   }
//   i++;
// }
// console.log(arr);




//Q. Array left Rotation by 1.

// let arr = [1,2,3,4,5];
// let temp = arr[0]

// for(let i=1; i<arr.length; i++){
//     arr[i-1] = arr[i];
// }
// arr[arr.length-1] = temp;
// console.log(arr)

//Q. Array right Rotation by 1.

// let arr = [1, 2, 3, 4, 5];

// let temp = arr[arr.length-1];
// for(let i = arr.length-2; i>=0; i--){
//     arr[i+1] = arr[i]
// }
// arr[0] = temp;
// console.log(arr)






//Q. Array left Rotation by K elements.

// let k = 12;
// let count = 0;
// let arr = [1, 2, 3, 4, 5];
// k = k % arr.length;              //isse faltu rotation nahi hogi
// for (let j = 1; j <= k; j++) {
//   count++;
//   let temp = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     arr[i - 1] = arr[i];
//   }
//   arr[arr.length - 1] = temp;
// }

// console.log(arr);
// console.log(count);  //checking kitni baar rotate hora hai



//Q. Array left Rotation by K elements.

// let k = 12;
// let arr = [1, 2, 3, 4, 5];
// k = k % arr.length;             
// for (let j = 1; j <= k; j++) {
//   let temp = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     arr[i - 1] = arr[i];
//   }
//   arr[arr.length - 1] = temp;
// }
// console.log(arr);
 



//Q. Print the count of subarray whose sum is equal to the target
// (Ex- {1,2,3,7,5} , T=12 )
// Output - 2 - [ {2,3,7} , {7,5} ]
// Both subarray have sum 12.


// let arr = [1, 2, 3, 7, 5];
// let count = 0;
// let target = 12;

// for(let i = 0; i<arr.length; i++){
//     let sum = 0;
//     for(let j = i; j<arr.length; j++){
//         sum += arr[j]
//         if(sum==target) count++;
//     }
// }
// console.log(count);




