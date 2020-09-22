/*
Date.UTC(ano, mes, dia, horas, minutos, segundos, milisegundos)     os 5 últimos são opcionais

The UTC() method returns the number of milliseconds between a specified date and midnight of January 1, 1970, according to
universal time.
Tip: The Universal Coordinated Time (UTC) is the time set by the World Time Standard.
Note: UTC time is the same as GMT time.

*/

var uma_data = new Date()
console.log(uma_data)
console.log(typeof uma_data)
console.log('-------------------')

var n = Date.UTC(2003, 5, 12)
console.log(n)
console.log(typeof n)

console.log('-------------------')

var x = new Date(Date.UTC(2003, 5, 12))
console.log(x)
console.log(typeof x)
