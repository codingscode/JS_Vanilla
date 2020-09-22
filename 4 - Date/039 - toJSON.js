/*
Date.toJSON()

The toJSON() method converts a Date object into a string, formatted as a JSON date.
JSON dates have the same format as the ISO-8601 standard: YYYY-MM-DDTHH:mm:ss.sssZ

*/

var uma_data = new Date()
console.log(uma_data)
console.log(typeof uma_data)

console.log('-------------------')

var n = uma_data.toJSON()
console.log(n)
console.log(typeof n)
