// shift() - remove o primeiro item de um array e o retorna
/*
The shift() method removes the first item of an array.

Note: This method changes the length of the array.

Note: The return value of the shift method is the removed item.

Tip: To remove the last item of an array, use the pop() method.

Note: this method will change the original array.
*/

var frutas = ['manga', 'melao', 'uva', 'laranja', 'pera', 'melancia']

console.log(frutas)

var tirarprimeiro = frutas.shift()

console.log(tirarprimeiro)
console.log(frutas)

