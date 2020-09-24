// sort() - array.sort(compareFunction)
/*
The sort() method sorts the items of an array.

The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).

By default, the sort() method sorts the values as strings in alphabetical and ascending order.

This works well for strings ("Apple" comes before "Banana"). However, if numbers are sorted as strings, "25" is 
bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce an incorrect result when sorting numbers.

You can fix this by providing a "compare function" (See "Parameter Values" below).

Note: This method changes the original array.
*/

var frutas = ['manga', 'melao', 'uva', 'laranja', 'pera', 'melancia', 'jaca', 'caju', 'graviola', 'maçã']
var numeros = [10, 2, 100, 40, 30, 15, 60, 0, 31]
var misturado = [10, 'lua', 'chapeu', 80, 15, 8, 'pen drive']

console.log('nao ordenado : ' + frutas)
console.log('nao ordenado : ' + numeros)
console.log('nao ordenado : ' + misturado)

var ordfrutas = frutas.sort()
var ordnumeros = numeros.sort()
var ordmisturado = misturado.sort()

console.log('ordenado : ' + ordfrutas)
console.log('ordenado : ' + ordnumeros)
console.log('ordenado : ' + ordmisturado)

console.log('--------------')

function comparar(a, b) {
    return a - b        // se positivo 
}

var mais = numeros.sort(comparar)

var mais2 = misturado.sort(comparar)

console.log(mais)
console.log(mais2)

console.log('--------------')

var decrescente = numeros.sort((a, b) => {return b - a})  //se negativo

console.log('ordem decrescente : ' + decrescente)


