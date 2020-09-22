// https://javascript.info/custom-errors

// The "pseudocode" for the built-in Error class defined by JavaScript itself
class Erro {
    constructor(mensagem) {
      this.mensagem = mensagem
      this.nome = "Erro" // (different names for different built-in error classes)
      //this.stack = <call stack/> // non-standard, but most environments support it
    }
}

class MeuErro extends Erro {
    constructor(message) {
       super(message)
       this.name = this.constructor.name
    }
}

class ErroValidacao extends MeuErro { }

class ErroPropriedadeRequerida extends ErroValidacao {
    constructor(propriedade) {
      super("Sem propriedade: " + propriedade)
      this.propriedade = propriedade
    }
}
  
console.log( new ErroPropriedadeRequerida("campo").name )  // field

function testar() {
    throw new ErroValidacao("Whoops!")
}
  
try {
    testar()
}
catch(erro) {
    console.log('----->>>', erro)
    console.log(erro.mensagem) // Whoops!
    console.log(erro.name) // ValidationError
    console.log(erro.stack) // a list of nested calls with line numbers for each
}


// Usage
function lerUsuario(json) {
    let usuario = JSON.parse(json)
  
    if (!usuario.idade) {
      //throw new ValidationError("No field: age") // 1
      throw new ErroPropriedadeRequerida("idade")  // 2
    }
    if (!usuario.nome) {
      //throw new ValidationError("No field: nome")  // 1
      throw new ErroPropriedadeRequerida("nome") // 2
    }
  
    return usuario
}
  
// Working example with try..catch
  
try {
    let usuario = lerUsuario('{ "idade": 25 }')
}
catch (erro) {
    if (erro instanceof ErroValidacao) {
      console.log('------>>>>', erro)
      console.log("Dado inválido: " + erro.mensagem) // Invalid data: No field: name
      console.log(erro.name) // PropertyRequiredError
      console.log(erro.propriedade) // name
    }
    else if (erro instanceof SyntaxError) { // (*)
      console.log("JSON Syntax Error: " + erro.message)
    }
    else {
      throw erro // unknown error, rethrow it (**)
    }
}
