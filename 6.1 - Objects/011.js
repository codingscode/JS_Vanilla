// https://javascript.info/symbol

// chaves de propriedades de objetos podem ser tanto tipo string ou tipo symbol.

       // id é um novo symbol
let id = Symbol()

       // agora com descrição de 'id'
let id1 = Symbol('id')
let id2 = Symbol('id')

console.log(id1 == id2)
console.log(id1)
console.log(id1.description)

console.log('-------------------')

// propriedades escondidas

let usuario1 = {nome: 'Simon'}

let id3 = Symbol('id')

usuario1[id3] = 2

console.log(usuario1[id3])   // nós podemos acessar o dado usando o symbol como a chave
console.log(usuario1)
console.log(usuario1.id3)
console.log(typeof id3)

console.log('-------------------')

// Symbols em um literal

let id4 = Symbol('id')

let usuario2 = {nome: 'Yamoto', idade: 22,[id4]: 123} // não "id4: 123"
console.log(usuario2)

// Symbols são pulados por for...in

for (let chave in usuario2) console.log(chave)  // nome, idade (sem symbols)

// o acesso direto pelo symbol funciona
console.log('Direto: ' + usuario2[id4])

console.log('-------------------')

let id5 = Symbol('id')

let usuario3 = { [id5]: 456}

let clone1 = Object.assign({}, usuario3)

console.log(clone1[id5])
console.log(clone1)

console.log('-------------------')

// Symbols globais, global symbol registry
      // Symbol.for(chave)

// ler do global registry
let id6 = Symbol.for('id_6')
console.log(id6)

// ler isso novamente (talvez de outra parte do código)
let id6Novamente = Symbol.for('id_6')

// o mesmo symbol
console.log(id6 === id6Novamente)

console.log('-------------------')

// Symbol.keyFor
    // Symbol.keyFor(sym)
   
// acessar symbol pelo nome
let sym1 = Symbol.for('nome')
let sym2 = Symbol.for('id')

// acessar nome pelo symbol
console.log(Symbol.keyFor(sym1))
console.log(Symbol.keyFor(sym2))
console.log(sym1)

console.log('--------------------------')

let symbolGlobal = Symbol.for('nome')
let symbolLocal = Symbol('nome')

console.log(Symbol.keyFor(symbolGlobal))
console.log(Symbol.keyFor(symbolLocal))

console.log(symbolLocal.description)
console.log(symbolGlobal.description)
console.log('-----------------------')
