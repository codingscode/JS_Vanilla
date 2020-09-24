// https://javascript.info/custom-errors
let json = `{ "nome": "John", "idade": 30 }`

// The "pseudocode" for the built-in Error class defined by JavaScript itself
class Erro {
    constructor(mensagem) {
      this.mensagem = mensagem
      this.nome = "Erro" // (different names for different built-in error classes)
      //this.stack = <call stack/> // non-standard, but most environments support it
    }
}

class ErroValidacao extends Erro {  
    constructor(mensagem) {
      super(mensagem) // (1)
      this.nome = "ErroValidacao" // (2)
    }
}

class ErroPropriedadeRequerida extends ErroValidacao {   
    constructor(propriedade) {
      super("Sem propriedade: " + propriedade);
      this.nome = "ErroPropriedadeRequerida";
      this.propriedade = propriedade;
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
    console.log(erro.nome) // ValidationError
    console.log(erro.stack) // a list of nested calls with line numbers for each
}


// Usage
function lerUsuario(json) {
    let usuario = JSON.parse(json);
  
    if (!usuario.idade) {
      //throw new ValidationError("No field: age"); // 1
      throw new ErroPropriedadeRequerida("idade");  // 2
    }
    if (!usuario.nome) {
      //throw new ValidationError("No field: name");  // 1
      throw new ErroPropriedadeRequerida("nome"); // 2
    }
  
    return usuario;
}
  
// Working example with try..catch
  
try {
    let usuario = lerUsuario('{ "idade": 25 }');
}
catch (erro) {
    if (erro instanceof ErroValidacao) {
      console.log("Dado Inválido: " + erro.mensagem); // Invalid data: No field: name
      console.log(erro.nome); // PropertyRequiredError
      console.log(erro.propriedade); // name
    }
    else if (erro instanceof SyntaxError) { // (*)
      console.log("JSON Syntax Error: " + erro.message);
    }
    else {
      throw erro; // unknown error, rethrow it (**)
    }
}
