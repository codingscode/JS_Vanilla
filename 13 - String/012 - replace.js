/*
string.replace(valor_procurado, novo_valor)

The replace() method searches a string for a specified value, or a regular expression, and returns a new string where the 
specified values are replaced.
Note: If you are replacing a value (and not a regular expression), only the first instance of the value will be 
replaced. To replace all occurrences of a specified value, use the global (g) modifier (see "More Examples" below).
Read more about regular expressions in our RegExp Tutorial and our RegExp Object Reference.
This method does not change the original string.

*/

var frase_1 = 'amanhã o dia será bom'
var frase_2 = frase_1.replace('bom', 'ótimo')
var frase_x = frase_1.replace('nao_tem', 'ótimo')

var frase_3 = 'Anastacia tem uma camisa branca e uma bota branca'
var frase_4 = frase_3.replace('branca', 'verde')
var frase_5 = frase_3.replace(/branca/g, 'verde')

var frase_6 = 'Mario tem um chapéu Marrom, um óculos marrom e um caderno marrom'
var frase_7 = frase_6.replace(/marrom/g, 'laranja')
var frase_8 = frase_6.replace(/marrom/gi, 'laranja')

var frase_9 = 'Vicente comprou uma skate preto, uma bola branca e pendrive azul'
var frase_10 = frase_9.replace(/skate|preto|bola|pendrive/gi, function(x) {
    return x.toUpperCase()
})

console.log('1: ' + frase_1 + '\n------------')
console.log('2: ' + frase_2 + '\n------------')
console.log('x: ' + frase_x + '\n------------')
console.log('3: ' + frase_3 + '\n------------')
console.log('4: ' + frase_4 + '\n------------')
console.log('5: ' + frase_5 + '\n------------')
console.log('6: ' + frase_6 + '\n------------')
console.log('7: ' + frase_7 + '\n------------')
console.log('8: ' + frase_8 + '\n------------')
console.log('9: ' + frase_9 + '\n------------')
console.log('10: ' + frase_10 + '\n------------')
