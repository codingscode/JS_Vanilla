/*
Date.now()

The Date.now() method returns the number of milliseconds since January 1, 1970 00:00:00 UTC.

*/


var agora = Date.now()  // desde 1/1/1970 utc

var minuto = 1000*60
var hora = 60*minuto
var dia = 24*hora
var ano = 365*dia

var dif_anos = Math.round(agora/ano)

console.log(agora)
console.log(dif_anos + ' anos')
