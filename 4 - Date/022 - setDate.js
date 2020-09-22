/*
Date.setDate(dia)    1-31

The setDate() method sets the day of the month to the date object.

*/

var uma_data = new Date()
console.log(uma_data)

uma_data.setDate(10)
console.log(uma_data)

uma_data.setDate(0)  // ultimo dia do mês prévio
console.log(uma_data)

var uma_data2 = new Date('March 21, 1983 01:15:00')
uma_data2.setDate(20)  
console.log(uma_data2)
