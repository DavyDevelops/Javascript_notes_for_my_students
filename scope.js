//Scope

//var and let keyword
//var keyword is function  scope
//let & const keyword is block scope
//var keyword old declaring variable in js
//let and const ES(ecma script)6 2015
// but the difference is in the scope

//Block Scope
//function scope
//Global Scope

//Block scope

//Block scope was introduced in 2015 with the introduction of let and const keywords.

// Block scope dictates that variable declared from inside a pair of curly braces cannot be accessed from outside the code block

// {
//     let myName = "Longwul"
//     const myNameIs = "Vick"
// }

// console.log(myName)


//Here within the block we declared and assigned const myName
//Then tried to console.log it outside the code block and javascript threw an error
//Then when we logged the code inside the block the code ran without error
//Let and const variables can only be accessed in the block their declared in


// {
//     const herName = "vicky";
//     console.log(herName);
// }

// console.log(herName);

//FUNCTION SCOPE

// Function scope dictates that variables declared from inside a function are not accessible from outside the function

//Javascript threw an error when we try to access the variable from outside the function javascript throws in an error

// function sayHello () {
//     const greet = "Hello1"
//     let greeter = "Hello1"
//     console.log(greet)
// }
// //  const greet = "Hello2"

// console.log(greet)
// console.log(greeter)


//Global Scope

/**
 * The final scope is global scope which is a scope outside any code block or a function, its also accessible within the code block and a funciton
 */

// const scopeGlobal = "I am Global!!!"

// function sayHello(){
//     console.log(scopeGlobal)
// }

// if(true){
//     console.log(scopeGlobal)
// }
// sayHello()



// var newNumber = 90
// function accessIt() {
//     var ageNumber = 18
//     console.log(newNumber)
// }
// accessIt()
// console.log(ageNumber)