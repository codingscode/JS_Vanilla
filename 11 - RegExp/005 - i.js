/*
new RegExp("regexp", "i") or simply:  /regexp/i

The i modifier is used to perform case-insensitive matching.
Tip: Use the ignoreCase property to check whether or not the "i" modifier is set.

*/

var uma_string1 = 'a rua de pedra do Centro é bonita'

var padrao_1 = /centro/i
var resultado_1 = uma_string1.match(padrao_1)

console.log(resultado_1)
