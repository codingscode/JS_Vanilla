// getFullYear() -  Date.getFullYear()
/*
The getFullYear() method returns the year (four digits for dates between year 1000 and 9999) of 
the specified date.
*/

var x1 = new Date()
var mostrar1 = x1.getFullYear()

console.log('O ano de hoje é : ' + mostrar1)
console.log('--------------------')

var x2 = new Date('July 21, 1993 01:15:00')
var mostrar2 = x2.getFullYear()

console.log('a data é : ' + mostrar2)