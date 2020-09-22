/*
Date.getUTCSeconds()

The getUTCSeconds() method returns the seconds (from 0 to 59) of the specified date and time, 
according to universal time.

The UTC methods calculate their date assuming that the date object is of local time and date.
Tip: The Universal Coordinated Time (UTC) is the time set by the World Time Standard.
Note: UTC time is the same as GMT time.


*/

var uma_data = new Date()
var segundos = uma_data.getUTCSeconds()

console.log(uma_data)
console.log(segundos)
