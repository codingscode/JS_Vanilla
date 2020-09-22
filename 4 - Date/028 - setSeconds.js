/*
Date.setSeconds(sec, millisec)    o último é opcional

The setSeconds() method sets the seconds of a date object.
This method can also be used to set the milliseconds.

*/

var uma_data = new Date()
console.log(uma_data)
console.log(uma_data.getSeconds())
console.log(uma_data.getMilliseconds())

uma_data.setSeconds(17, 305)
console.log(uma_data)
console.log(uma_data.getSeconds())
console.log(uma_data.getMilliseconds())
