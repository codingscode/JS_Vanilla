/*
string.charCodeAt(index)

The charCodeAt() method returns the Unicode of the character at the specified index in a string.

The index of the first character is 0, the second character 1, and so on.

Tip: You can use the charCodeAt() method together with the length property to return the Unicode of the last character in a 
string. The index of the last character is -1, the second last character is -2, and so on (See Example below).

Tip: For more information about Unicode Character Sets, visit our HTML Character Sets reference.


*/

var uma_string = 'gafanhoto'

console.log('para g : ' + uma_string.charCodeAt(0))
console.log('para a : ' + uma_string.charCodeAt(1))
console.log('para f : ' + uma_string.charCodeAt(2))
