// number.toPrecision(x)
/*
The toPrecision() method formats a number to a specified length.
A decimal point and nulls are added (if needed), to create the specified length.

*/

var numero = 14.86756
var numero2 = 10.21953

console.log(`${numero.toPrecision(2)} || ${numero2.toPrecision(2)}`)
console.log(`${numero.toPrecision(3)} || ${numero2.toPrecision(3)}`)
console.log(`${numero.toPrecision(4)} || ${numero2.toPrecision(4)}`)
console.log(`${numero.toPrecision(5)} || ${numero2.toPrecision(5)}`)
console.log(`${numero.toPrecision(6)} || ${numero2.toPrecision(6)}`)
