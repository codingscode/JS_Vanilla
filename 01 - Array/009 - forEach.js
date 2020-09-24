// forEach() -   array.forEach(function(currentValue, index, arr), thisValue)

const carros = ['corsa', 'celta', 'pajero', 'montana', 'fiat']

function teste(item) {
    console.log(item)
}

carros.forEach(teste)
console.log('-------------')

const nomes = ['Alice', 'Fabíola', 'Paulo', 'Marcos', 'Flavia', 'Felipe']


function ordenando(item, indice) {
    console.log(`${indice} : ${item}`)
}

nomes.forEach(ordenando)

console.log('-------------')


const numeros = [10, 0, 5, 7, 3]
var soma = 0

function somar(item) {
     soma += item
}

numeros.forEach(somar)

console.log(soma)


/*
*/

