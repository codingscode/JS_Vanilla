// slice() - array.slice(start, end) , inicio e fim são facultativos
/*
The slice() method returns the selected elements in an array, as a new array object.

The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

Note: The original array will not be changed.
*/

var frutas = ['manga', 'melao', 'uva', 'laranja', 'pera', 'melancia', 'jaca', 'caju', 'graviola', 'maçã']

console.log(frutas)

var selecionados = frutas.slice(2, 6) //ordem 2 até ?-1

console.log(selecionados)
console.log(frutas)

console.log('------------')

var carros = ['fusca', 'corsa', 'celta', 'astra', 'golf']

var outros = carros.slice(-3, -1)   //imagine um circulo

console.log(outros)