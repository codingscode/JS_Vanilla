/*
Date.getUTCMonth()

The getUTCMonth() method returns the month (from 0 to 11) for the specified date, according to universal time.

Note: January is 0, February is 1, and so on.

The UTC methods calculate their date assuming that the date object is of local time and date.

Tip: The Universal Coordinated Time (UTC) is the time set by the World Time Standard.

Note: UTC time is the same as GMT time.

*/

const uma_data = new Date()
var mes = uma_data.getUTCMonth()

var meses = ['jan', 'fev', 'marc', 'abr', 'maio', 'jun', 'jul', 'agst', 'stb', 'otb', 'nov', 'dez']

console.log(uma_data)
console.log(mes)
console.log(meses[mes])
