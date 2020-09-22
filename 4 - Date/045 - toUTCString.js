/*
Date.toUTCString()

The toUTCString() method converts a Date object to a string, according to universal time.
Tip: The Universal Coordinated Time (UTC) is the time set by the World Time Standard.
Note: UTC time is the same as GMT time.
*/

var uma_data = new Date()
console.log(uma_data)
console.log(typeof uma_data)
console.log('-------------------')

var n = uma_data.toUTCString()
console.log(n)
console.log(typeof n)
