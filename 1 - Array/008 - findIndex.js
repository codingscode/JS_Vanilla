// findIndex() - returns the index of the first element in an array that pass a test (provided as a function).


const numeros = [21, 15, 40, 7, 31, 12, 20, 43]

const nomes = ['Alice', 'Fabíola', 'Paulo', 'Marcos', 'Flavia', 'Felipe']

const indicems30 = numeros.findIndex(p => { return p>30})

console.log('indice ' + indicems30)

const temb = nomes.findIndex(p => {return p.includes('M')}) // primeiro que contenha m

console.log('indice ' + temb)



