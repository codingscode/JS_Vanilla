// RegExpObject.exec(string)
/*
The exec() method tests for a match in a string.

This method returns the matched text if it finds a match, otherwise it returns null.


*/

var uma_string1 = 'Os ignorantes, que acham que sabem tudo, privam-se de um dos maiores prazeres da vida: aprender.'
var padrao_1 = new RegExp('q')
var resposta_1 = padrao_1.exec(uma_string1)

var padrao_2 = new RegExp('ig')
var resposta_2 = padrao_2.exec(uma_string1)

var padrao_3 = new RegExp('tudo')
var resposta_3 = padrao_3.exec(uma_string1)

var padrao_4 = new RegExp('nada')
var resposta_4 = padrao_4.exec(uma_string1)


console.log(resposta_1, typeof resposta_1)
console.log(resposta_2)
console.log(resposta_3)
console.log(resposta_4)
console.log('---------------------')

// 
var uma_string2 = 'o rato roeu a roupa do rei de roma'

var padrao_5 = /roupa/g
var resultado_1 = padrao_5.exec(uma_string2)

var padrao_6 = /turin/g
var resultado_2 = padrao_6.exec(uma_string2)

console.log(resultado_1)
console.log(resultado_2)
