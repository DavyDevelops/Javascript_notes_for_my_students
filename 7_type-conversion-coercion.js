/**
 * Type conversion is when we convert a data type from one form to another
 * 
 * type conversion is when javascript forces a convertion from one form to another
 * 
 * typeof operator checks the type of a vaue
 */


//examples of type convertion 

// const inputYear = "1991";
// console.log(inputYear-18)

// Break down
// the constant variable inputYear is assigned a string "1991"
// JS was meant to log the values of inputYear added to 18
// inputYear is a string, 18 is a number
// when +(plus) operator was used JS forced a type coercion
// and converted the values of inputYear


// let inputYear = "1991";
// console.log(inputYear+18)
//


// // type conversion
// const userAge = "19"; // userAge is string

// numberUserAge = Number(userAge); // we declared a new variable numberUserAge and assigned it userAge witha number function to convert it

// console.log(typeof numberUserAge) // console.log the type of operator
// console.log(numberUserAge + 50) // numberUserAge is a number so it was added to 50



// const userNAge = "19"; // userAge is string
// numberNUserAge = String(userNAge); // we declared a new variable numberUserAge and assigned it userAge with a String function to convert it

// console.log(typeof numberNUserAge) // console.log the type of operator
// console.log(numberNUserAge + 50) // numberUserAge is a number so it was concatenated to 50



console.log(Number("John Wick"));
console.log(typeof NaN)

console.log(typeof String(99))

/**
 * Javascript can only convert to 3 types a string a number and a boolean, but no to undefined or null

Type Coercion happens when an operator is dealing with two values that has different types, Javascript will then convert one of the values to match the other value 
 */