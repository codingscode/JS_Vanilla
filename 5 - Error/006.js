//
function lerDado() {
    let meu_json = '{"idade": 20}'

    try {
        //
        blabla() // erro 
    }
    catch (erro) {
       // ...
       if (erro.name != 'SyntaxError') {
          throw erro  // rethrow (don't know how to deal with it)
       }
    }
}

try {
    lerDado()
}
catch (erro) {
    console.log('Erro externo capturado: ' + erro)
}
