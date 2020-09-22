// map() - array.map(function(currentValue, index, arr), thisValue)
/*
1 - creates a new array with the results of calling a function for every array element.
2 - calls the provided function once for each element in an array, in order.
3 - does not execute the function for array elements without values
4 - this method does not change the original array

*/

const numeros = [1, 3, 10, 6, 4, -20, 13, 16]

var divpor2 = numeros.map((p) => { return p % 2 == 0})
console.log(divpor2)

console.log('----------------')


const cores = ['azul', 'laranja', 'branco', 'azul', 'roxo', 'branco', 'laranja', 'verde', 'vermelho', 'branco']

function ordenar(item, indice) {
    return `${indice+1}) ${item}`
}

const arrumado = cores.map(ordenar)

console.log(arrumado)

console.log('----------------')

const lista = [10, 20, 15, 30, 50]
var adicionar5 = lista.map(p => {return p + 5})

console.log(adicionar5)


console.log('-----------------------------\n')


/*

const minha_lista = [8, 12, 20]

var delta = 0

var maior = minha_lista.reduce((a, b) => {
    return Math.max(a, b)
})

function teste(matriz, variacao, cada) {
    //var x = Math.max(minha_lista)
    while ( cada % (maior - variacao == 0) ) {
        minha_lista.every((cada, indice) => {return cada % (maior - variacao == 0)})
        variacao += 1
    }
    return maior - variacao
}

// minha_lista.every((cada, indice) => {return cada % (maior - variacao == 0)})

console.log(teste(minha_lista, delta))
console.log(maior)



*/


