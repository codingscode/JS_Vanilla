/*
Date.getTime()

The getTime() method returns the number of milliseconds between midnight of January 1, 1970 and the specified date.

*/

var uma_data = new Date()
var milisegundos = uma_data.getTime() // desde 1/1/1970

// número de anos desde 1970
var minutos = 1000 * 60
var horas = minutos * 60
var dias = horas * 24
var anos = dias * 365
var data = new Date()
var tempo = data.getTime()

var y = Math.round(tempo / anos)

console.log(uma_data)
console.log(milisegundos)
console.log(y)
