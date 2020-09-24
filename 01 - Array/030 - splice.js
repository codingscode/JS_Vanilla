// splice() - array.splice(index, howmany, item1, ....., itemX);    index exigido, os outros dois são facultativos
/*
The splice() method adds/removes items to/from an array, and returns the removed item(s).

Note: This method changes the original array.

index -	Required. An integer that specifies at what position to add/remove items, Use negative values to specify the position from the end of the array
howmany - Optional. The number of items to be removed. If set to 0, no items will be removed
item1, ..., itemX -	Optional. The new item(s) to be added to the array
*/

var frutas = ['bananas', 'manga', 'melao', 'laranja', 'uva']
frutas.splice(2)  // a partir da ordem 2 exclui até o final

console.log(frutas)

var frutas2 = ['bananas', 'manga', 'melao', 'laranja', 'uva', 'melancia', 'groselha']
frutas2.splice(2, 3)  // a partir da ordem 2 exclui 3

console.log(frutas2)

var transporte = ['bicicleta', 'patinete', 'carro', 'onibus', 'avião', 'navio']
console.log('transporte : ' + transporte)
transporte.splice(3, 0, 'a pé', 'metrô')   // a partir da ordem 3 substitui, o excluidos após

console.log('transporte : ' + transporte)

var transporte2 = ['bicicleta', 'patinete', 'carro', 'onibus', 'avião', 'navio']
transporte2.splice(3, 2, 'a pé', 'metrô')

console.log('transporte2 : ' + transporte2)
