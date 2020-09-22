// isNan()
/*
isNaN(value)
The isNaN() function determines whether a value is an illegal number (Not-a-Number).

This function returns true if the value equates to NaN. Otherwise it returns false.

This function is different from the Number specific Number.isNaN() method.

The global isNaN() function, converts the tested value to a Number, then tests it.

Number.isNaN() does not convert the values to a Number, and will not return true for any 
value that is not of the type Number.
*/

var numero = 123
var outronumero = -78
var zero = 0
var falsonumero = '16'
var umastring = 'arvore'

var umadata = '18/03/2020'
var stringvazia = ''
var boleano_true = true
var boleano_false = false
var indefinido = undefined
var infinito = 1/0
var nnumber = NaN
var nnumber2 = 'NaN'

console.log('numero é : ' + isNaN(numero))
console.log('outronumero é : ' + isNaN(outronumero))
console.log('zero é : ' + isNaN(zero))
console.log('falsonumero é : ' + isNaN(falsonumero))
console.log('umastring é : ' + isNaN(umastring))
console.log('umadata é : ' + isNaN(umadata))
console.log('stringvazia é : ' + isNaN(stringvazia))
console.log('boleano_true é : ' + isNaN(boleano_true))
console.log('boleano_false é : ' + isNaN(boleano_false))
console.log('indefinido é : ' + isNaN(indefinido))
console.log('infinito é : ' + isNaN(infinito))
console.log('nnumber é : ' + isNaN(nnumber))
console.log('nnumber2 é : ' + isNaN(nnumber2))
