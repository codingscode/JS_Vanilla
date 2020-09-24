/*
Date.setUTCFullYear(year, month, day)          os 2 últimos são opcionais

The setUTCFullYear() method sets the year (four digits for dates between year 1000 and 9999) of a date object, according 
the UTC time.
Tip: The Universal Coordinated Time (UTC) is the time set by the World Time Standard.
Note: UTC time is the same as GMT time.

*/

var uma_data = new Date()
console.log(uma_data)
console.log(uma_data.getUTCFullYear())

uma_data.setUTCFullYear(2002)
console.log(uma_data)
console.log(uma_data.getUTCFullYear())

console.log('----------------')

uma_data.setUTCFullYear(2042, 6, 20)
console.log(uma_data)

uma_data.setUTCFullYear(2020, -10, 15)
console.log(uma_data)
