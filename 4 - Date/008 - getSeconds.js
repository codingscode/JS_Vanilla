/*
Date.getSeconds()

The getSeconds() method returns the seconds (from 0 to 59) of the specified date and time.


*/

var uma_data = new Date()
var o_segundos = uma_data.getSeconds()


function adicionarZero(i) {
    if (i < 10) {
      i = '0' + i
    }
    return i
}
  
function minhaFuncao() {
    var d = new Date()
    var h = adicionarZero(d.getHours())
    var m = adicionarZero(d.getMinutes())
    var s = adicionarZero(d.getSeconds())
    var x = h + ':' + m + ':' + s
    return x
}


console.log(uma_data)
console.log(o_segundos)
console.log(minhaFuncao())
