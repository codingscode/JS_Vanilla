// reduce() - array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
/*
The reduce() method reduces the array to a single value.

The reduce() method executes a provided function for each value of the array (from left-to-right).

The return value of the function is stored in an accumulator (result/total).

Note: reduce() does not execute the function for array elements without values.

Note: this method does not change the original array.
*/

const numeros = [3, 4, 5, 6]

function somar(soma, valatual, indiceatual) {
     return soma += valatual
}

const somado = numeros.reduce(somar)

console.log(somado)

console.log('---------------')

var lugares = ['volta redonda', 'curitiba', 'bonito', 'florianópolis']

var arrumado = []

const listado = lugares.reduce((ordem, atual, indatual) => {
    arrumado.push(`${indatual} : ${atual}`)
    return arrumado}, 0)

console.log(listado)

console.log('---------------')

const multiplicacao = numeros.reduce((mult, valoratual, indiceatual) => { return mult *= valoratual})

console.log(multiplicacao)