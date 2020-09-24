/*
Date.setHours(hour, min, sec, millisec)

The setHours() method sets the hour of a date object.
This method can also be used to set the minutes, seconds and milliseconds.


*/

var uma_data = new Date()
console.log(uma_data)

uma_data.setHours(15)
console.log(uma_data)

console.log('-----------')

uma_data.setHours(11, 21, 32)
console.log(uma_data)

uma_data.setHours(uma_data.getHours() - 48)
console.log(uma_data)