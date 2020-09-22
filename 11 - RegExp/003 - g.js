/*    new RegExp("regexp", "g")  or simply:  /regexp/g

*/
/*
The g modifier is used to perform a global match (find all matches rather than stopping after the first match).

Tip: To perform a global, case-insensitive search, use this modifier together with the "i" modifier.

Tip: Use the global property to specify whether or not the g modifier is set.

*/

var string_frase1 = 'toda Informacao é dado, mas nem todo dado é informacao'

// Do a global search for
var padrao_1 = /dado/g
var resultado_1 = string_frase1.match(padrao_1)

// Do a global, case-insensitive search for 
var padrao_2 = /informacao/gi
var resultado_2 = string_frase1.match(padrao_2)

console.log(resultado_1)
console.log(resultado_2)
