/*
Date.getUTCDay()

The getUTCDay() method returns the day of the week (from 0 to 6) for the specified date, according to universal time.

Note: Sunday is 0, Monday is 1, and so on.

The UTC methods calculate their date assuming that the date object is of local time and date.

Tip: The Universal Coordinated Time (UTC) is the time set by the World Time Standard.

Note: UTC time is the same as GMT time.

*/

const uma_data = new Date()
var o_dia = uma_data.getUTCDay()

var dias = ['domingo' ,'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado']


console.log(uma_data)
console.log(o_dia)
console.log(dias[o_dia])
