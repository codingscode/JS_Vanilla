let meu_json = '{ "idade": 30}' // dado imcompleto
try {
  let usuario = JSON.parse(meu_json)

  if (!usuario.nome) {
    throw new SyntaxError("Dado imcompleto: sem nome")
  }

  blabla() // unexpected error

  console.log( usuario.nome )

}
catch(erro) {
  if (erro.name == "SyntaxError") {
    console.log( "Erro JSON: " + erro.message )
  } 
  else {
    throw erro // rethrow (*)
  }
}

// continuar      The error throwing on line (*) from inside catch block
// https://javascript.info/try-catch

/* 
throw -> jogo para erro;    throw new SyntaxError -> joga para erro.message

 */