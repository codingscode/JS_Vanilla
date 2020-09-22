/*
Date.getUTCHours()

The getUTCHours() method returns the hour (from 0 to 23) of the specified date and time, according to universal time.

The UTC methods calculate their date assuming that the date object is of local time and date.

Tip: The Universal Coordinated Time (UTC) is the time set by the World Time Standard.

Note: UTC time is the same as GMT time.

*/

const uma_data = new Date()
var uma_hora = uma_data.getUTCHours()

const uma_data2 = new Date('August 14, 1982 18:21:00')
var uma_hora2 = uma_data2.getUTCHours()



console.log(uma_data)
console.log(uma_hora)
console.log('------------')

console.log(uma_data2)
console.log(uma_hora2)
