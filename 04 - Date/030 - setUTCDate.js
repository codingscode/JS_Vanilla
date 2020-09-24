/*
Date.setUTCDate(day)

The setUTCDate() method sets the day of the month, according to the UTC time.
Tip: The Universal Coordinated Time (UTC) is the time set by the World Time Standard.
Note: UTC time is the same as GMT time.

*/

var uma_data = new Date()
console.log(uma_data)

uma_data.setUTCDate(22)
console.log(uma_data)

uma_data.setUTCDate(0)   // muda o último dia do mês anterior
console.log(uma_data)

console.log('-------------------')
var outra_data = new Date('01/13/2021')   // mes/dia/ano
console.log(outra_data)
outra_data.setUTCDate(23)
console.log(outra_data)