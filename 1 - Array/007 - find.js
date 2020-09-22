// find() - obtem o primeiro elemento em um array que satisfaça um criterio
/*

*/

const numeros = [21, 15, 40, 7, 31, 12, 20, 43]

const nomes = ['Alice', 'Fabíola', 'Paulo', 'Marcos', 'Flavia', 'Felipe']

const mais18 = numeros.find(p => { return p%2 == 0})

console.log(mais18)

const comF = nomes.find(p => { return p.charAt(0) == 'F'})

console.log(comF)

