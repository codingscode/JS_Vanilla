/*
Date.getUTCMinutes()

The getUTCMinutes() method returns the minutes (from 0 to 59) of the specified date and time, 
according to universal time.

The UTC methods calculate their date assuming that the date object is of local time and date.

Tip: The Universal Coordinated Time (UTC) is the time set by the World Time Standard.

Note: UTC time is the same as GMT time.


*/

const uma_data = new Date()
var minutos = uma_data.getUTCMinutes()

const uma_data2 = new Date('June 7, 2000 01:05:32')
var minutos2 = uma_data2.getUTCMinutes()

function adicionarZero(i) {
    if (i < 10) {
      i = '0' + i
    }
    return i
}
  
function minhaFuncao() {
    var d = new Date()
    var h = adicionarZero(d.getUTCHours())
    var m = adicionarZero(d.getUTCMinutes())
    var s = adicionarZero(d.getUTCSeconds())
    var x = h + ':' + m + ':' + s
    return x
}


console.log(uma_data)
console.log(minutos)
console.log('--------------')

console.log(uma_data2)
console.log(minutos2)

console.log('--------------')

console.log(minhaFuncao())
