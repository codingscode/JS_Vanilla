/*
Date.setMinutes(min, sec, millisec)

The setMinutes() method sets the minutes of a date object.
This method can also be used to set the seconds and milliseconds.

*/

var uma_data = new Date()
console.log(uma_data)
console.log(uma_data.getMinutes())


uma_data.setMinutes(23, 12, 201)
console.log(uma_data)
console.log(uma_data.getMinutes())
