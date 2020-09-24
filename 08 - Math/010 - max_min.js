// Math.max(n1, n2, n3, ..., nX)
/*
The max() method returns the number with the highest value.
*/

var maior1 = Math.max(2, 1, 10, 6)
console.log(maior1)

var valores1 = [10, -4, 8, 15, 0]

var maior2 = valores1.reduce((anterior, atual) => {
    return Math.max(anterior, atual)
})

console.log(maior2)
console.log('----------------')


// Math.min(n1, n2, n3, ..., nX)
/*
The min() method returns the number with the lowest value.
*/

var menor1 = Math.min(19, 8, 5, -3, 10)
console.log(menor1)

var valores2 = [20, 5, 8, 15, 30]
var menor2 = valores2.reduce((anterior, atual) => {
    return Math.min(anterior, atual)
})

console.log(menor2)
