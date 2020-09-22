// filter()
/* 
function(valoratual, index,arr)	Required. A function to be run for each element in the array.
Function arguments:
valoratual - Required. The value of the current element
index -	Optional. The array index of the current element
arr - Optional. The array object the current element belongs to

*/


const numeros = [21, 15, 40, 7, 31, 12, 20, 43]

const nomes = ['Alice', 'Fabíola', 'Paulo', 'Marcos', 'Flavia', 'Felipe']

const maisque20 = numeros.filter(p => { return (p >20)})

console.log(maisque20)

const iniciaF = nomes.filter(p => { return p.charAt(0) == 'F'})

console.log(iniciaF)