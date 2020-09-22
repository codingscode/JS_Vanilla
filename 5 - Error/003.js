//

// correto
var correto_json = `{"nome": "Paulo", "idade": 21}`
// incorreto
let incorreto_json = `{nome: "Paulo", idade: 21}`


try {
   let usuario = JSON.parse(incorreto_json)
   console.log(usuario.nome)
}
catch (erro) {
   console.log('O dado tem erro')
   console.log(erro.name)
   console.log(erro.message)
}

console.log('---------------------')

let erro = new Error('Ocorreu um erro')
console.log(erro.name)
console.log(erro.message)
