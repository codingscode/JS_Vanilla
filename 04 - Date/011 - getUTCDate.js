/*
Date.getUTCDate()

The getUTCDate() method returns the day of the month (from 1 to 31) of the date object, according to universal time.

The UTC methods calculate their date assuming that the date object is of local time and date.

Tip: The Universal Coordinated Time (UTC) is the time set by the World Time Standard.

Note: UTC time is the same as GMT time.


*/

var uma_data = new Date()
var o_dia = uma_data.getUTCDate()

var uma_data2 = new Date('July 21, 1983 22:15:00')
var o_dia2 = uma_data2.getUTCDate()



console.log(uma_data)
console.log('dia: ' + o_dia)
console.log('-----------')

console.log(uma_data2)
console.log('dia: ' + o_dia2)

