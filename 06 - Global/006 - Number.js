// Number() - Number(object)
/*
The Number() function converts the object argument to a number that represents the object's value.

If the value cannot be converted to a legal number, NaN is returned.

Note: If the parameter is a Date object, the Number() function returns the number 
of milliseconds since midnight January 1, 1970 UTC.
*/

var v1 = true
var v2 = false
var v3 = new Date()
var v4 = '999'
var v5 = '999 888'
var v6 = 'k'

console.log(`v1 é : ${Number(v1)}`)
console.log(`v2 é : ${Number(v2)}`)
console.log(`v3 é : ${Number(v3)}`)
console.log(`v4 é : ${Number(v4)}`)
console.log(`v5 é : ${Number(v5)}`)
console.log(`v6 é : ${Number(v6)}`)
