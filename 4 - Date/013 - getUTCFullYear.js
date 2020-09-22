/*
Date.getUTCFullYear()

The getUTCFullYear() method returns the year (four digits for dates between year 1000 and 9999) of the specified date, 
according to universal time.

The UTC methods calculate their date assuming that the date object is of local time and date.

Tip: The Universal Coordinated Time (UTC) is the time set by the World Time Standard.

Note: UTC time is the same as GMT time.

*/

const uma_data = new Date()
var um_ano = uma_data.getUTCFullYear()

const uma_data2 = new Date('April 5, 2003 09:53:00')
var um_ano2 = uma_data2.getUTCFullYear()


console.log(uma_data)
console.log(um_ano)
console.log('--------------------------')

console.log(uma_data2)
console.log(um_ano2)
