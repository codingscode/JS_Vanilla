/*
RegExpObject.global

Type	Description
Boolean	- Returns true if the "g" modifier is set, false otherwise

The global property specifies whether or not the "g" modifier is set.

This property returns true if the "g" modifier is set, otherwise it returns false.


*/

var uma_string1 = 'o rato roeu a roupa do rei de roma'
var padrao_1 = /roupa/g
var padrao_2 = /rei/gi
var padrao_3 = /roma/i

var resultado_1 = padrao_1.global
var resultado_2 = padrao_2.global
var resultado_3 = padrao_3.global


console.log(resultado_1)
console.log(resultado_2)
console.log(resultado_3)
