// getDay() - 
/*
The getDay() method returns the day of the week (from 0 to 6) for the specified date.

Note: Sunday is 0, Monday is 1, and so on.

*/

var data = new Date(2019, 09, 5)
var recebe = data.getDay()


console.log(recebe)   //6 é sábado
console.log('---------------')

var data2 = new Date()

var diasemana = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado']
/* var diasemana = new Array()
diasemana[0] = 'Domingo'
diasemana[1] = 'Segunda'
diasemana[2] = 'Terça'
diasemana[3] = 'Quarta'
diasemana[4] = 'Quinta'
diasemana[5] = 'Sexta'
diasemana[6] = 'Sábado' */

var mostrar = diasemana[data2.getDay()]

console.log('O dia hoje é : ' + mostrar)

