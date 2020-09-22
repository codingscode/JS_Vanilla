/*
The for statement creates a loop that is executed as long as a condition is true.

The loop will continue to run as long as the condition is true. It will only stop when the condition becomes false.


*/


for (var i=0; i < 8; i++) {
    console.log(`o ${i+1}º: ${i}`)
}

console.log('----------\n')

numeros = []

for (var i=5; i<9; i++) {
    numeros.push(i)
}

console.log(numeros)
