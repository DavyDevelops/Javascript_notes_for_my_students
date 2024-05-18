// A value is a piece of data it is fundamental unti of programming

// A variable is a reference to a value

// why do we need a variable?

// A variable allows us to store a value in the computers memory
// it can be reused multiple times


// console.log("vicky");
// console.log(30);

const firstName = "vicky"

console.log(firstName);
console.log(firstName);


/** let scope difference block, dynamic values are stored here
 * var scope difference, dynamic values are stored here
 * const immutable values are stored here
 */

firstName = "long"
console.log(firstName);



/**
 * Let and Const keyword were introduced in ES6, so they're modern
While the var keyword was the old way of declaring variables


We use let keyword to declare variables that can be changed in the future.

Const keyword is used to declare variables that are not supposed to change or updated at any point in the future

 we tried change the value of const and it caused a type error
So the const keyword in technical terms create a variable that cannot be mutated, an immutable variable, while Let is mutable.

The fact that variables declared with const are immutable we cant declare an unassigned variable with the const keyword


  
Use const by default when assigning a variable and use let when you're sure a variable should change

Changing variables make it possible to create bugs or errors in your code


The var keyword is the old way of declaring variables prior to es6, var keyword can change the value later as well.

Although it seems let and var are similar there is differences between them
Let is block scope and var is function scope
In summary
 */