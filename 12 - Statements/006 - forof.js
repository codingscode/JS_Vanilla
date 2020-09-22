/*
for (variable of iterable) {
  code block to be executed
}

The for/of statement loops through the values of an iterable object.

*/

const produtos = ['mouse', 'teclado', 'pendrive', 'monitor', 'gabinete']

for (var cada of produtos) {
    console.log(cada)
}

console.log(typeof produtos)

const uma_string = 'baralho'

for (var cada of uma_string) {
    console.log(cada)
}
