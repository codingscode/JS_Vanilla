/*
string.indexOf(searchvalue, start)   // o 1º requerido, o 2º opcional

The indexOf() method returns the position of the first occurrence of a specified value in a string.
This method returns -1 if the value to search for never occurs.
Note: The indexOf() method is case sensitive.
Tip: Also look at the lastIndexOf() method.

*/

var uma_string = 'Pnmeumoultramicroscópico'

var verificar_1 = uma_string.indexOf('e')
var verificar_2 = uma_string.indexOf('e', 5)   //-1 significa falso
var verificar_3 = uma_string.indexOf('ultra', 0)  
var verificar_4 = uma_string.indexOf('o', 0)  
var verificar_5 = uma_string.indexOf('o', 8)  
var verificar_6 = uma_string.indexOf('micro', 4)  
var verificar_7 = uma_string.indexOf('microt', 4)  

console.log('indice: ' + verificar_1)
console.log('indice: ' + verificar_2)
console.log('indice: ' + verificar_3)
console.log('indice: ' + verificar_4)
console.log('indice: ' + verificar_5)
console.log('indice: ' + verificar_6)
console.log('indice: ' + verificar_7)

console.log('------------------------\n')


/*
string.lastIndexOf(searchvalue, start)    // o 1º requerido, o 2º opcional

The lastIndexOf() method returns the position of the last occurrence of a specified value in a string.

Note: The string is searched from the end to the beginning, but returns the index starting at the beginning, at position 0.

This method returns -1 if the value to search for never occurs.

Note: The lastIndexOf() method is case sensitive!

*/

var palavra_1 = 'besouros'
var procurar_caractere = palavra_1.lastIndexOf('o')  // ultima ocorrencia

var frase_1 = 'a luz que ilumina a rua de pedra do centro não é a mesma luz que ilumina a praia'
var procurar_palavra = frase_1.lastIndexOf('luz')
var procurar_palavra2 = frase_1.lastIndexOf('mesma', 74)
 

console.log(`indice: ${procurar_caractere}`)
console.log(`indice: ${procurar_palavra}`)
console.log(`indice: ${procurar_palavra2}`)
