/*
RegExpObject.lastIndex

type         description
Number	        An integer that specifies the character position immediately 
                after the last match found by exec( ) or test( ) methods

The lastIndex property specifies the index at which to start the next match.
Note: This property only works if the "g" modifier is set.
This property returns an integer that specifies the character position immediately after the last match found by exec( ) or 
test( ) methods.
Note: exec( ) and test( ) reset lastIndex to 0 if they do not get a match.

*/

var uma_string1 = 'no presente é melhor não estar ausente, mas fazendo o diferente para ficar mais contente.'
var padrao_1 = /ente/g
var padrao_2 = /t/g

padrao_2.test(uma_string1)
console.log('indice: ' + padrao_2.lastIndex)
console.log('indice: ' + padrao_2.lastIndex)
padrao_2.test(uma_string1)
console.log('indice: ' + padrao_2.lastIndex)

while (padrao_1.test(uma_string1) == true) {
    console.log(`ente encontrado. Indice agora em ${padrao_1.lastIndex}`)
}
