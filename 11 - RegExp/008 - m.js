/*
new RegExp("regexp", "m") or simply: /regexp/m

The m modifier is used to perform a multiline match.

The m modifier treat beginning (^) and end ($) characters to match the beginning or end of each line
of a string (delimited by \n or \r), rather than just the beginning or end of the string.

Note: The m modifier is case-sensitive and will stop the search after the first match. 
To perform a global, case-insensitive, multiline search, use this modifier together with "g" and "i".

Tip: Use the multiline property to specify whether or not the m modifier is set.

*/

var frase_1 = 'o erri na linha de cima\n o erri na linha de baixo\n o erri mais embaixo ainda'
var padrao_1 = /^erri/m

var resultado_1 = frase_1.match(padrao_1)
console.log(resultado_1)
frase_1.match(padrao_1)
console.log(resultado_1)

var frase_2 = 'erri na linha de cima\nerri na linha de baixo\nerri mais embaixo ainda'
var padrao_2 = /^erri/m

var resultado_2 = frase_2.match(padrao_2)

var frase_3 = 'esta linha termina com xx\na proxima linha tambem com xx\na última tambem xx'
var padrao_3 = /xx$/m

var resultado_3 = frase_3.match(padrao_3)

var frase_4 = 'sem erri na linha de cima\nerri na linha de baixo\nerri na ultima'
var padrao_4 = /^erri/m

var resultado_4 = frase_4.match(padrao_4)


console.log(resultado_2)
console.log(resultado_3)
console.log(resultado_4)
