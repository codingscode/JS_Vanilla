// Number.isSafeInteger(value)
/*
The Number.isSafeInteger() method determines whether a value is a safe integer.

A safe integer is an integer that can be exactly represented as an IEEE-754 double precision number (all integers 
from (2exp53 - 1) to -(2exp53 - 1)). [-9.007.199.254.740.991, 9.007.199.254.740.991]

This method returns true if the value is of the type Number, and a safe integer. Otherwise it returns false.

*/

var valor1 = Number.isSafeInteger(5)
var valor2 = Number.isSafeInteger(-20)
var valor3 = Number.isSafeInteger(20-5)
var valor4 = Number.isSafeInteger(0)
var valor5 = Number.isSafeInteger(2**53)
var valor6 = Number.isSafeInteger(2**53 - 1)
var valor7 = Number.isSafeInteger('300')
var valor8 = Number.isSafeInteger(true)
var valor9 = Number.isSafeInteger(false)
var valor10 = Number.isSafeInteger(1/0)
var valor11 = Number.isSafeInteger(Infinity)
var valor12 = Number.isSafeInteger(-Infinity)
var valor13 = Number.isSafeInteger(3.5)


console.log(`valor1 ${valor1}`)
console.log(`valor2 ${valor2}`)
console.log(`valor3 ${valor3}`)
console.log(`valor4 ${valor4}`)
console.log(`valor5 ${valor5}`)
console.log(`valor6 ${valor6}`)
console.log(`valor7 ${valor7}`)
console.log(`valor8 ${valor8}`)
console.log(`valor9 ${valor9}`)
console.log(`valor10 ${valor10}`)
console.log(`valor11 ${valor11}`)
console.log(`valor12 ${valor12}`)
console.log(`valor13 ${valor13}`)
