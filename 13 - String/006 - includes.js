/*
string.includes(valor_procurado, indice_inicial_para_procura)

The includes() method determines whether a string contains the characters of a specified string.
This method returns true if the string contains the characters, and false if not.
Note: The includes() method is case sensitive.

*/

var uma_string = 'nesta frase a palavra tecnologia está presente'

var verificar1 = uma_string.includes('tecnologia')
var verificar2 = uma_string.includes('tecnologia', 22)   // após o indice 22 não há o string 'tecnologia'
var verificar3 = uma_string.includes('tecnologia', 23) 

console.log(verificar1)
console.log(verificar2)
console.log(verificar3)
