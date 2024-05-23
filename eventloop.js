//The event loop explains how nodejs can be asynchronous and have no blocking io

// const bar = () => console.log("bar") //bar arrow function

// const baz = () => console.log("baz") //baz arrow function

// const foo = () => {
//     console.log("foo")
//     bar()
//     baz()
// }

// foo()

//Function bar logs bar and function baz logs baz,
//Function foo logs foo and calls both bar and baz, then foo() was called

/**
 * This are arrow functions that were released with ecma script 6
Node js calls each of these functions one by one, this is what is known as a call stack

When we execute this function the call stack will put this functions in a row or in a queue one by one

The event loop continuously checks the call stack to see if there is any function it needs to run

It adds any function call it finds and execute each one in order

The call stack iteration started from foo -> bar -> baz
This process continues until the call stack is empty
 */


// const bar = () => console.log("bar") //bar arrow function

// const baz = () => console.log("baz") //baz arrow function

// const foo = () => {
//     console.log("foo")
//     setTimeout(bar, 3000) // measured in milliseconds 3000ms is 3s 1000ms is 1s 2000ms is 2s
//     baz()
// }

// foo()

/**
 * The call stack first called the foo function then the baz function, when it saw the setTimeOut it moved the bar function to message queue while waiting(3000ms|| 3s) and then called the bar function from the message queue at the end of the program

When you deploy your app, you want to avoid creating a functions that delays the execution because it might add error in code like undefined object or undefined functions

To avoid this problem node adds promises, promises is a way to execute aa result of an async function as soon as possible rather than being put at the end of the call stack

If the function makes delay it executes at the end of the program
 */

//maz min max assignment