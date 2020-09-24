//   Number.isFinite(value)
/*
  The Number.isFinite() method determines whether a value is a finite number.

This method returns true if the value is of the type Number, and equates to a finite number. 
Otherwise it returns false.

Number.isFinite() is different from the global isFinite() function. 
The global isFinite() function converts the tested value to a Number, then tests it.

Number.isFinite() does not convert the values to a Number, and will not return true 
for any value that is not of the type Number.
*/


var teste1 = Number.isFinite(2)
var teste2 = Number.isFinite(10)
var teste3 = Number.isFinite(-1)
var teste4 = Number.isFinite(5/2)
var teste5 = Number.isFinite(8/0)
var teste6 = Number.isFinite('123')
var teste7 = Number.isFinite('fala')
var teste8 = Number.isFinite('01/01/1997')
var teste9 = Number.isFinite(Infinity)
var teste10 = Number.isFinite(-Infinity)
var teste11 = Number.isFinite(0/0)

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
