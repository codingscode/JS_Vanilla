/*
Date.parse(datestring)

The parse() method parses a date string and returns the number of milliseconds between the date string and midnight 
of January 1, 1970.

*/

var data = Date.parse('February 14, 2003')

var minuto = 1000*60
var hora = 60*minuto
var dia = 24*hora
var ano = 365*dia

var dif_anos = Math.round(data/ano)

console.log(data)
console.log(dif_anos)
