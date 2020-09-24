//  Number.isNaN(value)
/*
The Number.isNaN() method determines whether a value is NaN (Not-A-Number).

This method returns true if the value is of the type Number, and equates to NaN. Otherwise it returns false.

Number.isNaN() is different from the global isNaN() function. The global isNaN() function converts the tested value to 
a Number, then tests it.

Number.isNaN() does not convert the values to a Number, and will not return true for any value that is not of the type Number.

Tip: In JavaScript, the value NaN is considered a type of number.

*/

var valor1 = Number.isNaN(123) 
var valor2 = Number.isNaN(-1.23) 
var valor3 = Number.isNaN(5-2) 
var valor4 = Number.isNaN(0) 
var valor5 = Number.isNaN('123') 
var valor6 = Number.isNaN(('Hello')) 
var valor7 = Number.isNaN('2005/12/12') 
var valor8 = Number.isNaN('') 
var valor9 = Number.isNaN(true) 
var valor10 = Number.isNaN(undefined) 
var valor11 = Number.isNaN('NaN') 
var valor12 = Number.isNaN(NaN) 
var valor13 = Number.isNaN(0 / 0) 


console.log(`valor1   ${valor1}`)
console.log(`valor2   ${valor2}`)
console.log(`valor3   ${valor3}`)
console.log(`valor4   ${valor4}`)
console.log(`valor5   ${valor5}`)
console.log(`valor6   ${valor6}`)
console.log(`valor7   ${valor7}`)
console.log(`valor8   ${valor8}`)
console.log(`valor9   ${valor9}`)
console.log(`valor10   ${valor10}`)
console.log(`valor11   ${valor11}`)
console.log(`valor12   ${valor12}`)
console.log(`valor13   ${valor13}`)
console.log(isNaN(('Hello')))
console.log(isNaN('2020/12/3'))
console.log(isNaN(true))
