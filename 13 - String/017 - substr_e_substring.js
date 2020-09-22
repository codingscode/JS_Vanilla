/*
string.substr(inicio, comprimento)                    1º requerido, 2º opcional (se omisso extrai o resto da string)

The substr() method extracts parts of a string, beginning at the character at the specified position, and returns 
the specified number of characters.
Tip: To extract characters from the end of the string, use a negative start number (This does not work in IE 8 and earlier).
Note: The substr() method does not change the original string.


string.substring(start, end)                   1º requerido, 2º opcional (se omisso extrai o resto da string)

The substring() method extracts the characters from a string, between two specified indices, and returns 
the new sub string.
This method extracts the characters in a string between "start" and "end", not including "end" itself.
If "start" is greater than "end", this method will swap the two arguments, meaning 
str.substring(1, 4) == str.substring(4, 1).
If either "start" or "end" is less than 0, it is treated as if it were 0.
Note: The substring() method does not change the original string.

*/

const uma_string = 'Ah, a maçã não caiu por acaso: foi atraída por uma força em direção ao centro da Terra'

const extrar1 = uma_string.substr(11)
const extrar2 = uma_string.substr(11, 18)

const extrar3 = uma_string.substring(6)
const extrar4 = uma_string.substring(6, 10)


console.log(extrar1)
console.log(extrar2)
console.log('-----------------------\ncom substring()\n')

console.log(extrar3)
console.log(extrar4)
