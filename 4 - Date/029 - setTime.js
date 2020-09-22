/*
Date.setTime(millisec)

The setTime() method sets a date and time by adding or subtracting a specified number of 
milliseconds to/from midnight January 1, 1970.


*/

var uma_data = new Date()
console.log(uma_data)
console.log(uma_data.getMilliseconds())

uma_data.setTime(304)
console.log(uma_data)

uma_data.setTime(1332403882588)
console.log(uma_data)

uma_data.setTime(1450656000000)
console.log(uma_data)

console.log('-------------------------')
uma_data.setTime(-473040000000)
console.log(uma_data)