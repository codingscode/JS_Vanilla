/*
string.split(criterio_separacao_presente, numero_divisoes)          o 1º e o 2º são facultativos, caso omissos a 
separacao é como se fosse um elemento só, gera uma matriz   

*/

const uma_string1 = 'minha terra tem palmeiras...'

const string_separada = uma_string1.split()

const string_separada2 = uma_string1.split('')
const string_separada3 = uma_string1.split('', 4)
const string_separada4 = uma_string1.split('').join('*')

const string_separada5 = uma_string1.split(' ')

const string_separada6 = uma_string1.split('a')
const string_separada7 = uma_string1.split('a').join('***')

console.log(uma_string1)
console.log(string_separada)
console.log('2:', string_separada2)
console.log('3:', string_separada3)
console.log('4:', string_separada4)
console.log('5:', string_separada5)
console.log('6:', string_separada6)
console.log('6:', string_separada6)
console.log('7:', string_separada7)
