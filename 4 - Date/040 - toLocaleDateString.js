/*
Date.toLocaleDateString()

The toLocaleDateString() method converts the date (not the time) of a Date object into a readable string, using 
locale conventions.
*/

var uma_data = new Date()
console.log(uma_data)
console.log(typeof uma_data)
console.log('-------------------')

var n = uma_data.toLocaleDateString()
console.log(n)
console.log(typeof n)
