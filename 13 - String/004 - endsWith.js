/*
string.endsWith(searchvalue, length)


The endsWith() method determines whether a string ends with the characters of a specified string.

This method returns true if the string ends with the characters, and false if not.

Note: The endsWith() method is case sensitive.

*/

var uma_string1 = 'goiabada'
var uma_string2 = 'a rua do centro é de pedra'


var verificar1 = uma_string1.endsWith('a')
console.log(verificar1)

var verificar2 = uma_string2.endsWith('o', 8)  // até o tamanho 8, ou seja até o indice 8-1
var verificar3 = uma_string2.endsWith('o', 10)
console.log(verificar2)
console.log(verificar3)



