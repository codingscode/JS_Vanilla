/*
RegExpObject.ignoreCase
type                 description
Boolean	Returns - true if the "i" modifier is set, false otherwise


The ignoreCase property specifies whether or not the "i" modifier is set.
This property returns true if the "i" modifier is set, otherwise it returns false.

*/


var uma_string = 'pernalonga no looney tunes. pernilongo da dengue'
var padrao_1 = /perna/i
var resultado_1 = padrao_1.ignoreCase

console.log(resultado_1)
