/*
string.concat(string1, string2, ..., stringX)

The concat() method is used to join two or more strings.

This method does not change the existing strings, but returns a new string containing the text of the joined strings.

*/

var string_1 = 'antes só'
var string_2 = ', agora junto1'
var string_3 = ' mais junto2'
var string_4 = ' mais junto2'
var string_5 = ', tudo junto'

console.log(string_1.concat(string_2))
console.log(string_1.concat(string_2, string_3, string_4, string_5))
console.log(string_1)
