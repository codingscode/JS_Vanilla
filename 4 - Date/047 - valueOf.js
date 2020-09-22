/*
Date.valueOf()

The valueOf() method returns the primitive value of a Date object.
Note: The primitive value is returned as the number of millisecond since midnight January 1, 1970 UTC.

*/

var uma_data = new Date()
console.log(uma_data)
console.log(typeof uma_data)
console.log('-------------------')

var n = uma_data.valueOf()
console.log(n)
console.log(typeof n)
