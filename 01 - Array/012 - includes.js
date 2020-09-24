// includes() - determines whether an array contains a specified element.
/* 
This method returns true if the array contains the element, and false if not.

Note: The includes() method is case sensitive.
array.includes(element, start)
element	- Required. The element to search for
start - Optional. Default 0. At which position in the array to start the search
*/



const frutas = ['goiaba', 'manga', 'melao', 'uva', 'laranja', 'jaca', 'tanja']

const palavra = 'caracol'

var verificar1 = frutas.includes('melao')
var verificar2 = frutas.includes('melao', 4)  // a partir ordem 4

console.log(verificar1)
console.log(verificar2)
console.log(palavra.includes('r'))