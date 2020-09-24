/*
Date.getTimezoneOffset()

The getTimezoneOffset() method returns the time difference between UTC time and local time, in minutes.

For example, If your time zone is GMT+2, -120 will be returned.

Note: The returned value is not a constant, because of the practice of using Daylight Saving Time.

Tip: The Universal Coordinated Time (UTC) is the time set by the World Time Standard.

Note: UTC time is the same as GMT time.


*/

var uma_data = new Date()
var diferenca_horas = uma_data.getTimezoneOffset()

console.log(uma_data)
console.log('diferença em minutos: ' + diferenca_horas)
console.log('diferença em horas: ' + (diferenca_horas/60))
