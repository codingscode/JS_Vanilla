/*
Date.setUTCHours(hour, min, sec, millisec)       0-23 || 0-59  || 0-59 || 0-999         ; os 3 últimos são opcionais


The setUTCHours() method sets the hour of a date object, according to the UTC time.
This method can also be used to set the minutes, seconds and milliseconds.
Tip: The Universal Coordinated Time (UTC) is the time set by the World Time Standard.
Note: UTC time is the same as GMT time.


*/

var uma_data = new Date()
console.log(uma_data)

uma_data.setUTCHours(17)
console.log(uma_data)

console.log('-------------------')

uma_data.setUTCHours(02, 37, 12)
console.log(uma_data)

uma_data.setUTCHours(uma_data.getUTCHours() - 10)
console.log(uma_data)
