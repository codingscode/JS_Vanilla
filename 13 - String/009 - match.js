/*
string.match(regexp)

The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.
Read more about regular expressions in our RegExp Tutorial and our RegExp Object Reference.
Note: If the regular expression does not include the g modifier (to perform a global search), the match() method will 
return only the first match in the string.
This method returns null if no match is found.

*/

var frase_1 = 'a lua ilumina a rua de paralelepipedo'
var resultado_1 = frase_1.match(/ua/g)

var uma_string = 'ArAra, capivara, cheguevara, Guanabara'
var resultado_2 = uma_string.match(/ara/gi)

console.log(resultado_1)
console.log(resultado_2)
