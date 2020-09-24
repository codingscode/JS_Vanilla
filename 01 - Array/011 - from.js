// from() - The Array.from() method returns an Array object from any object with a length property or an iterable object.
/* Array.from(object, mapFunction, thisValue) */


var minhamatriz = Array.from('wewdsadd')
var xx = Array.from([12121])

console.log(minhamatriz)
console.log(xx)

function f() {
    console.log(Array.from(arguments))
}

f(1, 2, 3)

var dobro = Array.from([2, 3, 4], x => 2*x)

console.log('dobro é : ' + dobro)