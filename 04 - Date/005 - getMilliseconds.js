/*
Date.getMilliseconds()

The getMilliseconds() method returns the milliseconds (from 0 to 999) of the specified date and time.
*/

var data = new Date()
var j = data.getMilliseconds()

var k = new Date('July 21, 1983 01:15:00:526')
var kmili = k.getMilliseconds()


function adicionarZero(x) {
    while (x.toString().length < 2) {
        x = '0' + x
    }
    return x
}

function minhaFuncao() {
    var d = new Date()
    var hora = adicionarZero(d.getHours())
    var minuto = adicionarZero(d.getMinutes())
    var segundo = adicionarZero(d.getSeconds())
    var milisegundos = adicionarZero(d.getMilliseconds())
    var x = hora + ':' + minuto + ':' + segundo + ':' + milisegundos
    return x
}

console.log(data)
console.log(j)
console.log('--------------------')

console.log(k)
console.log(kmili)

console.log('------------------')

console.log(minhaFuncao())
