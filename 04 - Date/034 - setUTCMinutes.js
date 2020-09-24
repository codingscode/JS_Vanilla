/*
Date.setUTCMinutes(min, sec, millisec)            os 2 últimos são opcionais

The setUTCMinutes() method sets the minutes of a date object, according to UTC time.
Tip: The Universal Coordinated Time (UTC) is the time set by the World Time Standard.
Note: UTC time is the same as GMT time.


*/

var uma_data = new Date()
console.log(uma_data)

uma_data.setUTCMinutes(12)
console.log(uma_data)

uma_data.setUTCMinutes(uma_data.getUTCMinutes() - 45)
console.log(uma_data)
