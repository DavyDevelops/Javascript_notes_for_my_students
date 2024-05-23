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


const bar = () => console.log("bar") //bar arrow function

const baz = () => console.log("baz") //baz arrow function

const foo = () => {
    console.log("foo")
    setTimeout(bar, 3000) // measured in milliseconds 3000 is 3ms 1000 is 1s 2000 is 2ms
    baz()
}

foo()