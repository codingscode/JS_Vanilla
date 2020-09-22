/*
Date.toISOString()

The toISOString() method converts a Date object into a string, using the ISO standard.
The standard is called ISO-8601 and the format is: YYYY-MM-DDTHH:mm:ss.sssZ

*/

var uma_data = new Date()
console.log(uma_data)
console.log(typeof uma_data)

var n = uma_data.toISOString()
console.log(n)
console.log(typeof n)
