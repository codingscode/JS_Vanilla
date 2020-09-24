/*
Date.setMonth(month, day)

The setMonth() method sets the month of a date object.
Note: January is 0, February is 1, and so on.
This method can also be used to set the day of the month.


*/

var uma_data = new Date()
console.log(uma_data)
console.log(uma_data.getMonth())

uma_data.setMonth(10)
console.log(uma_data)
console.log(uma_data.getMonth())

console.log('-----------------------------')

uma_data.setMonth(7, 18)
console.log(uma_data)
console.log(uma_data.getMonth())
console.log(uma_data.getDate())