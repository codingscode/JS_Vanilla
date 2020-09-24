/*
Date.getHours()

The getHours() method returns the hour (from 0 to 23) of the specified date and time.

*/

var uma_data = new Date()
var uma_data2 = new Date('July 21, 1983 09:15:00')

var horas = uma_data.getHours()
var horas2 = uma_data2.getHours()

console.log('horas: ' + horas)
console.log('horas2: ' + horas2)