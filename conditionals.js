// // ==== CONDITIONALS ====
// // Definition: perform different operations based on the given condition

// // Task: Define whether a number is a positive or negative
// let integer = 1

// // inside the parentheses in an if statement, we write a logical statement checking whether it's true or false
// if(integer < 0) {
//     // Inside the curly brackets is our code block that runs IF we meet our condition (let)
// console.log("Negative: " + integer)
// } else {
//     // if we didn't meet our logical statement, else code block will execute instead
//     console.log("Positive: " + integer)
// }

// // Task: Setting up a security website that grants users over the age of 18+ access to the site. 
// // Write a conditional that gives users who are over 18 and logs access denied for users who do not meet the given condition.

// let age = 18
// // if(age < 18) {
// //     console.log("Access denied. User must be over 18.")
// // } 
// if(age >= 18) {
//     console.log("Access granted.")
// } else if(age < 18) {
//     // else does not a conditional statement, i.e. else(age < 18)
//     console.log("Access denied.")
// }



// Task:
/*
    Nested: if/else statement
    Declare a variable called num
    Add an if/else statement that checks if num is positive & greater than 100
    Add another statement to check if num is positive but less than 100
    Add a final statement to check if num is negative
 */

    // let num = 'apple'

    // & is called ampersand
    // && equals to AND in js
    // if(num > 100){
    //     console.log(num + " is positive and greater than 100. ")
    // }else if(num < 100){
    //     if(num > 0) {
    //     console.log(num + " is positive and less than 100. ")
    //     } 
    // } else if(num < 0){
    //     console.log(num + " is less than 0 AKA negative.")
    // }
    // else{
    // if(num === 100){
    //         console.log("WE GOT A HUNDRED!!!")
    //     } else {
    //     console.log("Error NAN " + num + " is a " + typeof(num))
    //     }
    // }

    // Task: Whas is your letter grade?
    /*
        If student gets 90 or higher: log A
        If 80 or above: log B
        If 70 or above: log C
        If 55 or above: log D
        If below 55: log F
    */

        // let grade = 23


        // JavaScript runs Top to Down approach
        // if (grade >=90) {
        //     console.log("A")
        // } else if(grade >= 80) {
        //     console.log("B")
        // } else if(grade >= 70) {
        //     console.log('C')
        // }else if(grade >= 55) {
        //     console.log("D")
        // }else{
        //     console.log("F")
        // }


//  REMAINDER OPERATOR====

// REMAINDER OPERATOR (also known as modulo) returns the remainder leftover when one operand is divided by a second operand.
// It always takes the sign of the dividend.

// Dividend meaning %

console.log("Remainders")
console.log (4 % 3) //1
console.log(20 % 2) //0
console.log(20 % 9) //2

// use cases
// Find out whether something is divisible by 2 means it's an even number
// An even number is always going to have a remainder of 0
// An odd number is always going to have a remainder of 1

// 24 => true
console.log(24 % 2 === 0)

// 35
console.log(35 % 2 !== 0) //means 35 does not have a remainder of 0
console.log(35 % 2 === 1)
console.log(35 % 2 !== '0')