/**
 * Falsy values are values that are not objectively false but become false when we try to convert them into a boolean

In JavaScript there are only 5 falsy values

0, '', undefined, null, NaN
 */

// console.log(Boolean(0))
// console.log(Boolean(''))
// console.log(Boolean(undefined))
// console.log(Boolean(null))
// console.log(Boolean(NaN))


/**
 * The number 0, an empty string, undefined, null, and NaN(not a number)
They are not false initially but will become 

Truthy values are values that will be converted to true:
Which is any number which isnt 0,
A string that isnt an empty string and contains a character
An empty object is a truthy value
 */


// console.log(Boolean(-200))
// console.log(Boolean(';'))
// console.log(Boolean({}))

//difference between null and undefined
// undefined is a variable yet to be assigned, while null is the absence of value(nothing)


let height = -1.8;//undefined

if(height){ //height is now a boolean and its value is false
    console.log('height is defined')
}else {
    console.log('height is not defined')
}