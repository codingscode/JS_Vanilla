//   number.toFixed(x)
/*
The toFixed() method converts a number into a string, keeping a specified number of decimals.

Note: if the desired number of decimals are higher than the actual number, nulls are added 
to create the desired decimal length.

*/

var duas_casas = 1.86783467.toFixed(2)
var tres_casas = 1.86783467.toFixed(3)
var quatro_casas = 1.86783467.toFixed(4)



console.log(`duas_casas ${duas_casas}`, typeof duas_casas)
console.log(`tres_casas ${tres_casas}`, typeof tres_casas)
console.log(`quatro_casas ${quatro_casas}`, typeof quatro_casas)
