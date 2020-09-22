/*
string.slice(start, end)      o 1º é indice (obrigatorio), o 2º é indice (facultativo)

The slice() method extracts parts of a string and returns the extracted parts in a new string.
Use the start and end parameters to specify the part of the string you want to extract.
The first character has the position 0, the second has position 1, and so on.
Tip: Use a negative number to select from the end of the string.

*/

const uma_string1 = 'A rua do centro é de paralelepipedo'

var tirar_trecho = uma_string1.slice(5, 15)

console.log(uma_string1)
console.log(`retirado: ${tirar_trecho}`)


const uma_string2 = 'A rua do centro é de paralelepipedo'

var tirar_trecho2 = uma_string2.slice(16)
console.log(tirar_trecho2)
console.log(uma_string2.slice(-1))  // tira o último caractere
