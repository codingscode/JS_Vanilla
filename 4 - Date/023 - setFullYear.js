/*
Date.setFullYear(ano, mes, dia)          ..., 0-11, 1-31

The setFullYear() method sets the year (four digits for dates between year 1000 and 9999) of the date object.

This method can also be used to set the month and day of month.

*/

var uma_data = new Date()
uma_data.setFullYear(2024)   // aqui só muda o ano

console.log(uma_data)

uma_data.setFullYear(2030, 5, 10)
console.log(uma_data)

uma_data.setFullYear(uma_data.getFullYear(), uma_data.getMonth() - 6)
console.log(uma_data)
