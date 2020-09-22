//  /pattern/modifiers;
/*
RegExp Object
A regular expression is an object that describes a pattern of characters.

Regular expressions are used to perform pattern-matching and "search-and-replace" functions on text.


*/


const cancao = 'Minha terra tem palmeiras, Onde canta o Sabiá; As aves, que aqui gorjeiam, Não gorjeiam como lá.'
var q_1 = cancao.search('Sabiá')  // retorna a posição , é casesensitive 

var q_2 = cancao.search(/sabiá/i)  /* Use a regular expression to do a case-insensitive search 
                                     for "sabiá" in a string*/

console.log(q_1)
console.log(q_2)

var frase_1 = 'o clima está bom'
var frase_2 = frase_1.replace('bom', 'ótimo')

var frase_3 = 'não se banha no mesmo rio duas vezes'
var frase_4 = frase_3.replace(/banha/i, 'toma banho')

console.log(frase_1)
console.log(frase_2)
console.log(frase_3)
console.log(frase_4)

console.log('------------------')

// https://www.w3schools.com/js/js_regexp.asp

var frase_5 = 'água mole Pedra dura tanto bate até que fura'
var padrao1 = /l/
var padrao2 = /tanto/
var padrao3 = /sem/
var padrao4 = /Tanto/


console.log(padrao1.test(frase_5))
console.log(padrao2.test(frase_5))
console.log(padrao3.test(frase_5))
console.log(padrao4.test(frase_5))

console.log('------------------')

/* It searches a string for a specified pattern, and returns the found text as an object.
If no match is found, it returns an empty (null) object.
 */

var frase_6 = 'as melhores coisas na vida são grátis'
var padrao_1 = /na/  // testar também : 'na', 'vida', 'sem'
var teste_1 = padrao_1.exec(frase_6)

console.log(teste_1)
console.log(`'${teste_1[0]}' encontrado na posicao ${teste_1['index']}, de '${teste_1['input']}'`)
