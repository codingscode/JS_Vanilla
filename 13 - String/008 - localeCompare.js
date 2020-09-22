/*
string.localeCompare(compareString)

The localeCompare() method compares two strings in the current locale.
The locale is based on the language settings of the browser.
The localeCompare() method returns a number indicating whether the string comes before, after or is equal 
as the compareString in sort order.

*/
// -1 falso, 1 verdadeiro

var uma_string1 = 'ab'
var uma_string2 = 'cd'
var uma_string3 = 'ef'

var n1 = uma_string1.localeCompare(uma_string2)   // uma_string2 vem antes de uma_string1 ?
var n2 = uma_string2.localeCompare(uma_string1)   // uma_string1 vem antes de uma_string2 ?

var n3 = uma_string3.localeCompare(uma_string1)   
var n4 = uma_string2.localeCompare(uma_string3)   

var n5 = uma_string2.localeCompare(uma_string2)   

console.log(n1)
console.log(n2)
console.log(n3)
console.log(n4)
console.log(n5)
