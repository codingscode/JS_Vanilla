// reduceRight() - array.reduceRight(function(total, currentValue, currentIndex, arr), initialValue)
/*
The reduceRight() method reduces the array to a single value.

The reduceRight() method executes a provided function for each value of the array (from right-to-left).

The return value of the function is stored in an accumulator (result/total).

Note: reduceRight() does not execute the function for array elements without values.
*/

var numeros = [20, 10, 15, 30]

const calcular = numeros.reduceRight((total, atual) => {return total - atual}, 0) 

console.log(calcular)
console.log('----------')

var arraydentro = [[3, 6], [11, 4], [-3, 16], [7, 8]]

var umsomente = arraydentro.reduceRight((acumulador, atual) => {return acumulador.concat(atual)}, [])

console.log(umsomente)