// constructor -  boolean.constructor
/*
In JavaScript, the constructor property returns the constructor function for an object.

The return value is a reference to the function, not the name of the function:

For JavaScript numbers the constructor property returns function Number() { [native code] }

For JavaScript strings the constructor property returns function String() { [native code] }

For JavaScript booleans the constructor property returns function Boolean() { [native code] }
*/

var booleano = false
var x = booleano.constructor

console.log(x)

