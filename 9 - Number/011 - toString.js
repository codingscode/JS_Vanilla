//  number.toString(base)   pode ser omitido(cai para o sistema decimal).    vai de 2 a 36
/*
The toString() method converts a number to a string.

*/

var numero = 12
var uma_string = numero.toString()

var numero2 = 15
var uma_string2 = numero2.toString(10)

var numero3 = 6
var uma_string3 = numero3.toString(2)

var numero4 = 13
var uma_string4 = numero4.toString(8)

var numero5 = 20
var uma_string5 = numero5.toString(16)

console.log(numero + ' : base 10 : ' + uma_string, typeof uma_string)
console.log(numero2 + ' : base 10 : ' + uma_string2)
console.log(numero3 + ' : base 2 : ' + uma_string3)
console.log(numero4 + ' : base 8 : ' + uma_string4)
console.log(numero5 + ' : base 16 : ' + uma_string5)
