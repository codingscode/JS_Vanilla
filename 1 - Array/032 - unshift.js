// unshift() - array.unshift(item1, item2, ..., itemX)
/*
The unshift() method adds new items to the beginning of an array, and returns the new length.

Note: This method changes the length of an array.

Tip: To add new items at the end of an array, use the push() method.

item1, item2, ..., itemX	Required. The item(s) to add to the beginning of the array
*/

var numeros = [3, 4, 5, 6, 10]
var novotamanho = numeros.unshift(8, 16, 32)

console.log(numeros)
console.log(novotamanho)






