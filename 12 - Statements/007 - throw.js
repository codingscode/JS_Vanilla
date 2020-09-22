/*
throw expression;

The throw statement throws (generates) an error.

When an error occurs, JavaScript will normally stop, and generate an error message.

The technical term for this is: JavaScript will throw an error.

The throw statement allows you to create a custom error.

The technical term for this is: throw an exception.

The exception can be a JavaScript String, a Number, a Boolean or an Object:

*/

var x = 10, y = 5

try {
   if(x == y)
      throw "e1"     // throw lança um erro para ser tratado
   else
       throw "e2"
}
catch(erro) {
   if(erro == "e1")
       console.log("Exceção: Ambos tem o mesmo valor!")
   if(erro == "e2")
       console.log("Exceção: Ambos são diferentes!")
}

console.log('----------------------\n')

var x = 10, y = 10

try {
    if(x == y)
        throw new Error("Exceção: Ambos tem o mesmo valor!");
    else
        throw new Error("Exceção: Ambos são diferentes!");
}
catch(e) {
    console.log(e.message);
}

console.log('----------------------\n')

function MeuObjeto(codigo, mensagem) {
    this.codigo = codigo;
    this.mensagem = mensagem;
}
      
var x = 10, y = 5;
try {
    if(x == y)
       throw new MeuObjeto(200, "Exceção: Ambos tem o mesmo valor!");
    else
       throw new MeuObjeto(201, "Exceção: Ambos são diferentes!");
}
catch(e) {
    console.log(e.codigo +" : "+ e.mensagem);
}


console.log('----------------------\n')

//   https://way2tutorial.com/javascript/javascript-throw.php
