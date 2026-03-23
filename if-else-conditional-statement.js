//conditional Statement - if-else

// Q 1. Accept two numbers and print the greatest between them

// let prompt = require('prompt-sync')()
// let firstNumber = Number(prompt("Enter first number: "))
// let secondNumber = Number(prompt("Enter second number: "))

// if(firstNumber>secondNumber) console.log(`${firstNumber} is greater than ${secondNumber}`)
// else console.log(`${secondNumber} is greater than ${firstNumber}`)






// Q 2. Accept an integer check whether it is an even number or odd

// let prompt = require('prompt-sync')()
// let num = Number(prompt("Enter any number: "))

// if(num%2===0){
//     console.log(`${num} is even`)
// }else{
//     console.log(`${num} is odd`)
// }






//Q 3. Accept name and age from the user. Check if the user is valid voter or not.

// let prompt = require('prompt-sync')()
// let user = prompt("Enter name: ")
// let age = Number(prompt("Enter age: "))

// if(age>=18 && age<=85){
//     console.log(`${user} can vote.`)
// }else{
//     console.log(`${user} can't vote.`)
// }






//Q 4. Accept three numbers and print the greatest among them

// let prompt = require('prompt-sync')()
// let firstNumber = Number(prompt("Enter first number: "))
// let secondNumber = Number(prompt("Enter second number: "))
// let thirdNumber = Number(prompt("Enter third number: "))

// if(firstNumber>secondNumber &&  firstNumber>thirdNumber){
//     console.log(`${firstNumber} is greater than ${secondNumber} and ${thirdNumber}`)
// }else if(secondNumber>firstNumber &&  secondNumber>thirdNumber){
//     console.log(`${secondNumber} is greater than ${firstNumber} and ${thirdNumber}`)
// } else{
//     console.log(`${thirdNumber} is greater than ${firstNumber} and ${secondNumber}`)
// }







// Q 5. Accept a year and check if it a leap year or not(google to find out what's leap year)

// let prompt = require('prompt-sync')()
// let year = Number(prompt("Enter Year: "))

// function isLeapYear(year) {

//     if(year%4===0 && (year%100!==0 || year%400===0)) return "Leap Year";
//     else return "Not a Leap Year"
// }
// console.log(isLeapYear(2400))













//Q 6. Counting number of days in a given month of a year

// let prompt = require('prompt-sync')()
// let month = Number(prompt("Enter a month:"))
// let year = Number(prompt("Enter a year:"))

// let days = 0;

// if(month == 2){
//     if(year%4==0 && (year%400==0 || year%100!=0)){
//         days = 29
//     }else days = 28
// }
// else if(month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12){
//     days = 31
// }else days = 30

// console.log(days)







// Q 7. Calculate Electricity Bill Based on Units Consumed.(Bijli Bill - Description on graphic)


// 1 way to solve -> top to down approach

// let prompt = require('prompt-sync')()
// let unit = Number(prompt("Enter unit:"))

// if(unit>0 && unit<=100) console.log(unit*4.2);
// else if(unit>100 && unit<=200) console.log((100*4.2)+(unit-100)*6);
// else if(unit>200 && unit<=400) console.log((100*4.2)+(100*6)+(unit-200)*8);
// else console.log((100*4.2)+(100*6)+(200*8)+(unit-400)*13);





// 2nd way - bottom approach

// let prompt = require('prompt-sync')()
// let unit = Number(prompt("Enter unit:")) //700

// if(unit>400){
//     amount = (unit-400)*13
//     unit = 400
// }
// if(unit>200 && unit<=400){
//     amount = amount + (unit-200)*8
//     unit = 200
// }
// if(unit>100 && unit<=200){
//     amount = amount + (unit-100)*6
//     unit = 100
// }
// amount = amount + (unit*4.2)

// console.log(amount)




// Q 6. Shop discount - Description on graphic
//practice - 1

// formula of discount : (discount * amount/100)

// formula for payable amount
// Payable Amount = amount - (discount * amount/100)



// let prompt = require('prompt-sync')()
// let amount = Number(prompt("Enter amount: "))

// let dis = 0;
// if(amount<=5000 && amount>=0){
//     dis = 0;
// }
// else if(amount>=5001 && amount<=7000){
//     dis = 5;
// }
// else if(amount>=7001 && amount<=9000){
//     dis = 10;
// }else dis = 20;

// console.log(amount-(dis*amount)/100)












//practice - 1


//formulas:

// discount = (amount*discount)/100

//payable amount = amount - (dis*amount)/100



// let prompt = require('prompt-sync')()

// let amount = Number(prompt("Enter Amount:"))

// let dis = 0;
// if(amount>=0 && amount<=5000) dis = 0;
// else if(amount>=5001 && amount<=7000) dis = 5;
// else if(amount>=7001 && amount<=9000) dis = 10;
// else dis = 20;

// console.log(amount - (dis*amount)/100)






// Practice - 2
// Calculate Electricity Bill based on units consumed.

//1 way - top-down approach

// let prompt = require('prompt-sync')()

// let unit = Number(prompt("Enter Units:"))

// if(unit>=0 && unit<=100) console.log(unit*4.2)
// else if(unit>=101 && unit<=200) console.log(((100*4.2) + unit-100)*6)
// else if(unit>=201 && unit<=400) console.log(((100*4.2) + (100*6) + unit-200)*8)
// else console.log(((100*4.2) + (100*6) + (200*8) + unit-400)*13)




//bottom-approach

//calculate bijli bill

// let prompt = require('prompt-sync')()
// let unit = Number(prompt("Enter Unit:"))

// let amount = 0;

// if(unit>400){
//     amount = (unit-400)*13
// }
// if(unit<=400 && unit>=201){
//     amount = amount + (unit-200)*8
// }
// if(unit<=200 && unit>=101){
//     amount = amount + (unit-100)*6
// }
// amount = amount + (unit*4.2)
// console.log(amount.toFixed(1))



