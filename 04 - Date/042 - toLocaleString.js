/*
Date.toLocaleString(locales, options)        os 2 são opcionais

The toLocaleString() method converts a Date object to a string, using locale settings.
The default language depends on the locale setup on your computer.

*/

var uma_data = new Date()
console.log(uma_data)
console.log(typeof uma_data)
console.log('-------------------')

var n = uma_data.toLocaleString()
console.log(n)
console.log(typeof n)

console.log('1: arabia saud ' + uma_data.toLocaleString('ar-SA'))
console.log('2: rep tcheca ' + uma_data.toLocaleString('cs-CZ'))
console.log('3: chile ' + uma_data.toLocaleString('es-CL'))
console.log('4: russia ' + uma_data.toLocaleString('ru-RU'))
console.log('5: holanda ' + uma_data.toLocaleString('nl-NL'))
console.log('6: brasil ' + uma_data.toLocaleString('pt-BR'))
console.log('7: israel ' + uma_data.toLocaleString('he-IL'))
console.log('8: india ' + uma_data.toLocaleString('ta-IN'))
