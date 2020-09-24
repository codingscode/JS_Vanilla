// some() - array.some(function(currentValue, index, arr), thisValue)
/*
The some() method checks if any of the elements in an array pass a test (provided as a function).

The some() method executes the function once for each element present in the array:

If it finds an array element where the function returns a true value, some() returns true (and does not check the remaining values)
Otherwise it returns false
Note: some() does not execute the function for array elements without values.

Note: some() does not change the original array.
*/
const numeros = [30, 25, 10, 14, 50, 3, 12, 35]

var algummaiorq20 = numeros.some((p) => {return p>= 20})

console.log(algummaiorq20)
console.log('-------------')

var algumdivisivel7 = numeros.some(p => {return p % 7 == 0})

console.log(algumdivisivel7)

console.log('-------------')


