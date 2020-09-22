/*
Date.setUTCMilliseconds(millisec)

The setUTCMilliseconds() method sets the milliseconds (from 0 to 999), according to universal time.
Tip: The Universal Coordinated Time (UTC) is the time set by the World Time Standard.
Note: UTC time is the same as GMT time.

*/

var uma_data = new Date()
console.log(uma_data)

uma_data.setUTCMilliseconds(254)
console.log(uma_data)
