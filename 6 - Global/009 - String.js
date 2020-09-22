// String() - String(object)
/*
The String() function converts the value of an object to a string.

Note: The String() function returns the same value as toString() of the individual objects.

*/

var v1 = Boolean(0)
var v2 = Boolean(1)
var v3 = new Date()
var v4 = '12345'
var v5 = 12345

console.log(`v1 vira : ${String(v1)}`)
console.log(`v2 vira : ${String(v2)}`)
console.log(`v3 vira : ${String(v3)}`)
console.log(`v4 vira : ${String(v4)}`)
console.log(`v5 vira : ${String(v5)}`)
