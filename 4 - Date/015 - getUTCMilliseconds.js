/*
Date.getUTCMilliseconds()

The getUTCMilliseconds() method returns the milliseconds (from 0 to 999) of the specified date and time, 
according to universal time.

The UTC methods calculate their date assuming that the date object is of local time and date.
Tip: The Universal Coordinated Time (UTC) is the time set by the World Time Standard.
Note: UTC time is the same as GMT time.


*/

const uma_data = new Date()
var milisegundos = uma_data.getUTCMilliseconds()

const outra_data = new Date('July 21, 1983 01:15:00:195')
var milisegundos2 = outra_data.getUTCMilliseconds()


console.log(uma_data)
console.log(milisegundos)
console.log('-----------------')
console.log(outra_data)
console.log(milisegundos2)
