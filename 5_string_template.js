// There is a better way of building a string and it is by using string templates strTemplate

// const strTemplate = ``
// $ = template literal(it allows you to run js embedded within a string value)

const doSomething = ` 1  + 90 is equals to ${1+90}`

console.log(doSomething)

let firstName = "Vicky"
let lastName = "student"
const age = 20


console.log(`Hello my first name is ${firstName}, and my last name is ${lastName}. I am ${age} years old`)

/**
 * Theres easy way of building strings using template literals


This is a old way of creating a string using variables

Note whenever your walking with string keep an eye on the quote being used


To resolve the baove issue you can simply change to double quotes



This a better way of building string, were calling the string 'strTemplate' just for the naming convention you can name it anything

The back tick is actually template literal

The advantage this gives us is we don’t have to worry about adding manual spacing which is why its called modern Javascript
Here we don’t have to worry about spacing issue, the code is more readable and easier to write.
One more advantage we have is we can actually run code in these code block, we can evaluate expressions in these blocks


Notice we used single quotes without errors

 */