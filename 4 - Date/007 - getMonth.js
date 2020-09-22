/*
Date.getMonth()

The getMonth() method returns the month (from 0 to 11) for the specified date, according to local time.

Note: January is 0, February is 1, and so on.


*/

var uma_data = new Date()
var um_mes = uma_data.getMonth()  // 0 a 11

var meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

var atual_mes = meses[um_mes]


console.log(uma_data)
console.log(um_mes)
console.log(atual_mes)
