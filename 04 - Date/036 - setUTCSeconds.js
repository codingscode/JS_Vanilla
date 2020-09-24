/*
Date.setUTCSeconds(sec, millisec)               o último é opcional

The setUTCSeconds() method sets the seconds of a date object, according to UTC time time.
This method can also be used to set the milliseconds.
Tip: The Universal Coordinated Time (UTC) is the time set by the World Time Standard.
Note: UTC time is the same as GMT time.

*/

var uma_data = new Date()
console.log(uma_data)

uma_data.setUTCSeconds(32)
console.log(uma_data)

uma_data.setUTCSeconds(1000000)
console.log(uma_data)
