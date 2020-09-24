// Math.trunc(x)
/*
 The trunc() method returns the integer part of a number.
*/

var valor = 7.8
var valor2 = 9.2
var valor3 = 6

var parte_inteira = Math.trunc(valor)
var parte_inteira2 = Math.trunc(valor2)

console.log(`${parte_inteira} || ${parte_inteira2}`)
console.log(valor2 == Math.trunc(valor2))
console.log(valor3 == Math.trunc(valor3))
console.log(Number.isInteger(valor2))
console.log(Number.isInteger(valor3))