// Number.isInteger(value)
/*
The Number.isInteger() method determines whether a value an integer.

This method returns true if the value is of the type Number, and 
an integer (a number without decimals). Otherwise it returns false.
*/


var teste1 = Number.isInteger(2)
var teste2 = Number.isInteger(10.5)
var teste3 = Number.isInteger(-1+8)
var teste4 = Number.isInteger(5/2)
var teste5 = Number.isInteger(8/0)
var teste6 = Number.isInteger('123')
var teste7 = Number.isInteger('fala')
var teste8 = Number.isInteger(false)
var teste9 = Number.isInteger(Infinity)
var teste10 = Number.isInteger(-Infinity)
var teste11 = Number.isInteger(0/0)

console.log(`teste1 ${teste1}`)
console.log(`teste2 ${teste2}`)
console.log(`teste3 ${teste3}`)
console.log(`teste4 ${teste4}`)
console.log(`teste5 ${teste5}`)
console.log(`teste6 ${teste6}`)
console.log(`teste7 ${teste7}`)
console.log(`teste8 ${teste8}`)
console.log(`teste9 ${teste9}`)
console.log(`teste10 ${teste10}`)
console.log(`teste11 ${teste11}`)
