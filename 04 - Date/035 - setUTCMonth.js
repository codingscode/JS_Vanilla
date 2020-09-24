/*
Date.setUTCMonth(month, day)     o último é opcional


The setUTCMonth() method sets the month (from 0 to 11), according to universal time.
Note: January is 0, February is 1, and so on.
This method can also be used to set the day of the month.
Tip: The Universal Coordinated Time (UTC) is the time set by the World Time Standard.
Note: UTC time is the same as GMT time.

*/

var uma_data = new Date()
console.log(uma_data)

uma_data.setUTCMonth(9)
console.log(uma_data)

console.log('-------------')

uma_data.setUTCMonth(7, 18)
console.log(uma_data)

uma_data.setUTCMonth(uma_data.getUTCMonth() + 8, 27)
console.log(uma_data)