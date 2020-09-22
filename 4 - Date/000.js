//Date Object  -  new Date(year, month, day, hours, minutes, seconds, milliseconds)
/*

*/

// usando numeros 
// Brasil gmt-3
var data_hoje = new Date    // horario de greenwhich
var d = new Date(1999, 7, 13, 10, 33, 30, 0) // converte para horario de greenwhich
var x = new Date(2008, 4)
var k = new Date(1990, 3)
var m = new Date(90, 5, 5)    // século prévio
var t = new Date(7, 1, 10)    // século prévio


console.log(data_hoje) //'data_hoje: ' + 
console.log(d) //'d: ' + 
console.log(x) //'x: ' + 
console.log(k) //'k: ' + 
console.log(m) //'m: ' + 
console.log(t) //'t: ' + 
console.log('---------------------')

// usando strings

var data_1 = new Date('October 13, 2014 11:13:00')
var data_2 = new Date('0')  // inicio do século atual
var data_3 = new Date('1990/04/10')

console.log(data_1)
console.log(data_2)
console.log(data_3)
