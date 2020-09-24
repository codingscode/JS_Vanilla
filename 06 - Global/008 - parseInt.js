// parseInt() - parseInt(string, radix)
/*
string - Required. The string to be parsed
radix -	Optional. A number (from 2 to 36) that represents the numeral system to be used

The parseInt() function parses a string and returns an integer.

The radix parameter is used to specify which numeral system to be used, for example, a radix of 16 (hexadecimal) indicates that the number in the string should be parsed from a hexadecimal number to a decimal number.

If the radix parameter is omitted, JavaScript assumes the following:

If the string begins with "0x", the radix is 16 (hexadecimal)
If the string begins with "0", the radix is 8 (octal). This feature is deprecated
If the string begins with any other value, the radix is 10 (decimal)
Note: Only the first number in the string is returned!

Note: Leading and trailing spaces are allowed.

Note: If the first character cannot be converted to a number, parseInt() returns NaN.

Note: Older browsers will result parseInt("010") as 8, because older versions of ECMAScript, (older than ECMAScript 5, uses the octal radix (8) as default when the string begins with "0". As of ECMAScript 5, the default is the decimal radix (10).


*/

var v1 = parseInt('10')
var v2 = parseInt('10.00')
var v3 = parseInt('10.33')
var v4 = parseInt('34 45 66')
var v5 = parseInt(' 60 ')
var v6 = parseInt('40 anos')
var v7 = parseInt('ele tinha 40')

var v8 = parseInt('10', 10)
var v9 = parseInt('010')
var v10 = parseInt('10', 8)
var v11 = parseInt('0x10')
var v12 = parseInt('10', 16)
var v13 = parseInt('1101', 2)
var v14 = parseInt('a2', 16)


console.log(`v1 vira : ${v1}`)
console.log(`v2 vira : ${v2}`)
console.log(`v3 vira : ${v3}`)
console.log(`v4 vira : ${v4}`)
console.log(`v5 vira : ${v5}`)
console.log(`v6 vira : ${v6}`)
console.log(`v7 vira : ${v7}`)
console.log(`v8 vira : ${v8}`)
console.log(`v9 vira : ${v9}`)
console.log(`v10 vira : ${v10}`)
console.log(`v11 vira : ${v11}`)
console.log(`v12 vira : ${v12}`)
console.log(`v13 vira : ${v13}`)
console.log(`v14 vira : ${v14}`)
