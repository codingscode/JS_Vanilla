/*
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error
https://javascript.info/custom-errors

*/

/*

try, catch, throw, finally
The try statement lets you test a block of code for errors.
The catch statement lets you handle the error.
The throw statement lets you create custom errors.
The finally statement lets you execute code, after try and catch, regardless of the result.

*/

var minhadata = new Date('asfsfdssssssssss')

try {
    console.log(minhadata)
    console.log('tudo certo')
}
catch(erro) {
   console.log(erro.message)
}
