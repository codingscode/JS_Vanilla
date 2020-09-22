/*
The do/while statement creates a loop that executes a block of code once, before checking if the condition is true, then 
it will repeat the loop as long as the condition is true.

The do/while statement is used when you want to run a loop at least one time, no matter what.

JavaScript supports different kinds of loops:

for - loops through a block of code a number of times
for/in - loops through the properties of an object
for/of - loops through the values of an iterable object
while - loops through a block of code while a specified condition is true
do/while - loops through a block of code once, and then repeats the loop while a specified condition is true

*/

var texto = ''
var delta = 0

do {
   texto += 'o número é ' + delta + '\n'
   delta++
}
while (delta < 6)

console.log(texto)
