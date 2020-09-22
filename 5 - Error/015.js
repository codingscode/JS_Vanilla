let json = `{ "nome": "John", "idade": 30 }`

// The "pseudocode" for the built-in Error class defined by JavaScript itself
class Erro {
    constructor(mensagem) {
      this.mensagem = mensagem
      this.nome = "Erro" // (different names for different built-in error classes)
      //this.stack = <call stack/> // non-standard, but most environments support it
    }
}

class MeuErro extends Erro {
    constructor(mensagem) {
       super(mensagem)
       this.name = this.constructor.name
    }
}

class LerErro extends Erro {
    constructor(mensagem, causa) {
       super(mensagem)
       this.causa = causa
       this.nome = 'Erro de leitura'
    }
}

class ErroValidacao extends MeuErro { }

class ErroPropriedadeRequerida extends ErroValidacao {
    //
}
  
console.log( new ErroPropriedadeRequerida("field").name )

function validarUsuario(usuario) {
    if (!usuario.idade) {
      throw new ErroPropriedadeRequerida("idade")
    }
  
    if (!usuario.nome) {
      throw new ErroPropriedadeRequerida("nome")
    }
}

function testar() {
    throw new ErroValidacao("Whoops!")
}
  
try {
    testar()
}
catch(erro) {
    console.log(erro.mensagem) // Whoops!
    console.log(erro.name) // ErroValidacao   testar 'nome' também
    console.log(erro.stack) // a list of nested calls with line numbers for each
    console.log('------->>>', erro)
}


// Usage
function lerUsuario(json) {
    let usuario
  
    try {
        usuario = JSON.parse(json)
    }
    catch (erro) {
        if (erro instanceof SyntaxError) {
            throw new LerErro("Syntax Error", erro)
        }
        else {
            throw erro
        }
    }

    try {
        validarUsuario(usuario)
    }
    catch (erro) {
        if (erro instanceof ErroValidacao) {
            throw new LerErro("Validation Error", erro)
        }
        else {
            throw erro
        }
    }

    try {
        lerUsuario('{bad json}')
    }
    catch (erro) {
        if (erro instanceof LerErro) {
          console.log(erro)
          // Original error: SyntaxError: Unexpected token b in JSON at position 1
          console.log("Original error: " + erro.causa)
        }
        else {
          throw erro
        }
    }

}

try {
    lerUsuario()
}
catch (erro) {
    console.log('*', erro.mensagem)
    console.log('*', erro.nome)
    //console.log('----->>>>', erro)
}

class FormatarErro extends SyntaxError {
    constructor(message) {
      super(message)
      this.nome = this.constructor.name
    }
}

let erro = new FormatarErro("erro de formatacao")

console.log( erro.message ) // formatting error
console.log( erro.nome ) // FormatError


console.log( erro instanceof FormatarErro ) // true
console.log( erro instanceof SyntaxError ) // true (because inherits from SyntaxError)
