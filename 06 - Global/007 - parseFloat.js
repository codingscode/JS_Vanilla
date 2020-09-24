// parseFloat() - parseFloat(string)
/*
The parseFloat() function parses a string and returns a floating point number.

This function determines if the first character in the specified string is a number. If it is, it parses the string until it 
reaches the end of the number, and returns the number as a number, not as a string.

Note: Only the first number in the string is returned!

Note: Leading and trailing spaces are allowed.

Note: If the first character cannot be converted to a number, parseFloat() returns NaN.
*/

var x1 = parseFloat('10')
var x2 = parseFloat('10.00')
var x3 = parseFloat('10.33')
var x4 = parseFloat('34 45 66')
var x5 = parseFloat(' 60 ')
var x6 = parseFloat('40 anos')
var x7 = parseFloat('ele tinha 40')
var x8 = parseFloat('8 x 7')
var x9 = parseFloat('8x7')


console.log(`x1 vira : ${x1}`)
console.log(`x2 vira : ${x2}`)
console.log(`x3 vira : ${x3}`)
console.log(`x4 vira : ${x4}`)
console.log(`x5 vira : ${x5}`)
console.log(`x6 vira : ${x6}`)
console.log(`x7 vira : ${x7}`)
console.log(`x8 vira : ${x8}`)
console.log(`x9 vira : ${x9}`)
