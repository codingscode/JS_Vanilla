/*
Date.getMinutes()

The getMinutes() method returns the minutes (from 0 to 59) of the specified date and time.


*/

var uma_data = new Date()
var obter_minutos = uma_data.getMinutes()


var uma_data2 = new Date('July 21, 1983 01:15:00')
var obter_minutos2 = uma_data2.getMinutes()


function adicionarZero(i) {
    if (i < 10) {
      i = '0' + i
    }
    return i
}
  
function minhaFuncao() {
    var data = new Date() // 'August 21, 2003 08:07:31'
    var hora = adicionarZero(data.getHours())
    var minuto = adicionarZero(data.getMinutes())
    var segundo = adicionarZero(data.getSeconds())
    var x = hora + ':' + minuto + ':' + segundo
    return x
}


console.log(uma_data) //'data: ' + 
console.log(obter_minutos) //'minutos: ' + 

console.log('--------------------')
console.log('data: ' + uma_data) //
console.log('minutos: ' + obter_minutos) // 

console.log('--------------------')

console.log(uma_data2)
console.log(obter_minutos2)

console.log('--------------------')

console.log(minhaFuncao())
