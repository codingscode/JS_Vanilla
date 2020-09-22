// eval(string)   :    string -	A JavaScript expression, variable, statement, or sequence of statements
/*
The eval() function evaluates or executes an argument.

If the argument is an expression, eval() evaluates the expression. 
If the argument is one or more JavaScript statements, eval() executes the statements.
*/

var k = 7
var w = 10

var soma = eval('k+w')
var outrasoma = eval('9+1')
var produto = eval('k*w')
var pegartudo = soma + outrasoma + produto


console.log(soma)
console.log(outrasoma)
console.log(produto)
console.log(pegartudo)