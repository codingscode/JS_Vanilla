/*
string.search(searchvalue)

The search() method searches a string for a specified value, and returns the position of the match.
The search value can be string or a regular expression.
This method returns -1 if no match is found.
Read more about regular expressions in our RegExp Tutorial and our RegExp Object Reference.

*/

// Perform a case-sensitive search:
const uma_string = 'veja se há o procurado nesta frase'
var achar = uma_string.search('procurado')   // mostra qual indice o procurado começa 
var achar2 = uma_string.search('Procurado')   // falso

console.log(achar)
console.log(achar2)

//Perform a case-insensitive search:

const uma_string2 = 'no meio do caminho havia uma Pedra, eu a tirei'
var achar3 = uma_string2.search(/pedra/i)

console.log(achar3)
