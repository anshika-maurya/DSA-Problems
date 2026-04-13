// Linear search

// let arr = [12, 23, 34, 56, 1, 3, 4, 80, 44];

// let target = 4;
// let index = -1;
// for(let i = 0; i<arr.length; i++){
//     if(arr[i]==target){
//         index = i;
//         break;
//     }
// }
// console.log(index==-1 ? "Not found" : "found at "+ index + " index" )



//Binary Search
let prompt = require('prompt-sync')()
let arr = [12, 19, 23, 34, 45, 56, 78, 80, 98];

let t = Number(prompt("Enter target number: "));
let st = 0;
let en = arr.length-1;
let index = -1;


while(st<=en){
    let mid = Math.floor((st+en)/2)
    if(arr[mid]==t){
        index = mid;
        break;
    } 
    else if(arr[mid]<t)  st = mid+1;
    else en = mid-1;
    
}
if(index==-1) console.log("Not found")
    else console.log("Element found at "+ index + " index")