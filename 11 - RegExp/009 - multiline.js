/*
RegExpObject.multiline
tipo                descrição
Boolean	   -       Returns true if the "m" modifier is set, false otherwise


The multiline property specifies whether or not the m modifier is set.
This property returns true if the "m" modifier is set, otherwise it returns false.


*/

var uma_string = 'a vaca está no campo'
var padrao_1 = /cam/gi       // 'g' e 'i' são estabelecidos, mas 'm' não
var resultado_1 = padrao_1.multiline

var uma_string2 = 'a vaca está no campo'
var padrao_2 = /cam/gim       // 'g', 'i' 'm' são estabelecidos
var resultado_2 = padrao_2.multiline


console.log(resultado_1)
console.log(resultado_2)
