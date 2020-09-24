// https://javascript.info/
// https://javascript.info/object
// https://javascript.info/types

/* objetos 'chave: valor',   chave é string , e valor é qualquer coisa

*/

// formas de criar objeto
let usuario1 = new Object()    // forma 1: "object constructor" syntax
let usuario2 = {}   // forma 2  "object literal" syntax

var pessoa1 = {nome: 'Simon', idade: 18, estudante: true}

console.log(pessoa1, `seu tipo é ${typeof pessoa1}`)
console.log('------------------------------')

// acessando propriedade  -> nomeobjeto.nomepropriedade
console.log(pessoa1.nome, pessoa1.idade, pessoa1.estudante, pessoa1.cidade)
console.log('------------------------------')

// criando propriedade   -> nomeobjeto.novapropriedade = valor
pessoa1.cidade = 'campo grande'
pessoa1.massa = 80
pessoa1["gosta passaros"] = true
console.log(pessoa1)
console.log('------------------------------')

// apagando propriedades -> delete nomeobjeto.nomepropriedade
delete pessoa1.idade
delete pessoa1.massa

console.log(pessoa1, '\n' + pessoa1.idade, pessoa1.massa)
console.log('------------------------------')

// alterando propriedades
pessoa1.nome = 'Garcia'
console.log(pessoa1)
console.log('---------------------')
