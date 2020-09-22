/*
string.startsWith(valor_procurado, indice_inicial)         1º é requerido, o 2º é facultativo (por padrão fica 0)

The startsWith() method determines whether a string begins with the characters of a specified string.
This method returns true if the string begins with the characters, and false if not.
Note: The startsWith() method is case sensitive.

*/

// verificar se a string abaixo inicia por 'Terra'
const uma_string = 'Terra à vista'
var verificar1 = uma_string.startsWith('Terra')
var verificar2 = uma_string.startsWith('Terra', 6)
var verificar3 = uma_string.startsWith('vista', 6)
var verificar4 = uma_string.startsWith('vista', 8)
var verificar5 = uma_string.startsWith('Vista', 8)


console.log(verificar1)
console.log(verificar2)
console.log(verificar3)
console.log(verificar4)
console.log(verificar5)
