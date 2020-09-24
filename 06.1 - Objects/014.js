// https://javascript.info/property-descriptors

// Property flags and descriptors

// property flags -> writable, enumerable, configurable

let usuario1 = {nome: 'Mário', idade: 16, massa: 70}

let descritor = Object.getOwnPropertyDescriptor(usuario1, 'nome')

console.log(JSON.stringify(descritor, null, 2))

usuario1.nome = 'Paulo'

let descritor1_2 = Object.getOwnPropertyDescriptor(usuario1, 'nome')

console.log(usuario1)

console.log(JSON.stringify(descritor1_2, null, 2))

console.log('------------------------------')

// Object.defineProperty(obj, propertyName, descriptor)

let usuario2 = {}

Object.defineProperty(usuario2, 'nome', {value: 'Sofia'})

let descritor2 = Object.getOwnPropertyDescriptor(usuario2, 'nome')


console.log(JSON.stringify(descritor2, null, 2))
console.log(usuario2)

console.log('------------------------------')

let usuario3 = {nome: 'Simon'}

Object.defineProperty(usuario3, 'nome', {
    writable: false // experimentar true
})

usuario3.nome = 'Amélia'

console.log(usuario3)
console.log('-------------------------')

let usuario4 = {}

Object.defineProperty(usuario4, 'nome', {
    // para propriedades novas nós precisamos explicitamente listar o que é true
    value: 'Tobias',
   /*  writable: true, */
    enumerable: true, // insere
    configurable: true
})

console.log(usuario4)
console.log(usuario4.nome)

usuario4.nome = 'Cesar'
console.log(usuario4)
console.log('-------------------')

// Non-enumerable

let usuario5 = {
    nome: 'Fabiola',
    idade: 19,
    toString() {
        return this.nome
    }
}

// por padrão, ambas de nossas propriedades são listadas
for (let chave in usuario5) console.log(chave)

console.log('------------------------')

let usuario6 = {
    nome: 'Tom',
    idade: 20,
    toString() {
        return this.nome
    }
}

console.log(usuario6)
console.log(Object.keys(usuario6))

Object.defineProperty(usuario6, 'toString', {
    enumerable: false // faz n aparecer
})

// Agora nosso toString() desaparece
for (let chave in usuario6) console.log('--->', chave)

console.log(usuario6)
console.log(Object.keys(usuario6))

console.log('-------------------------')

// Non-configurable  -> evita que algo seja deletadp

let descritor3 = Object.getOwnPropertyDescriptor(Math, 'PI') // de fábrica

console.log(JSON.stringify(descritor3, null, 2))

Math.PI = 5  // não pode ser alterado
console.log(Math.PI)

console.log('----------------------------')

let usuario7 = {idade: 17, cidade: 'taubaté', sexo: 'm', massa: 70}

Object.defineProperty(usuario7, 'nome', {
    value: 'Julio', enumerable: false , writable: false, configurable: false   // false, false, false
})

// enumerable -> por padrão é false, se true faz inserir
// writable -> " , se true permite editar
// configurable -> " , se true permite deletar

console.log(usuario7)
//Object.defineProperty(usuario7, 'nome', {writable: true}) // dá erro

// se writable e configurable forem false , nenhum dos debaixo afetará 'nome'
usuario7.nome = 'Peter'
delete usuario7.idade
usuario7.estado = 'sp'


console.log(usuario7)

delete usuario7.nome
console.log(usuario7)

// “Non-configurable” doesn’t mean “non-writable”

console.log('----------------------------')

// Object.defineProperties -> permite definir muitas propriedades de uma vez

let usuario8 = {}

Object.defineProperties(usuario8, {
    nome: {value: 'Kyle', enumerable: true, writable: true},
    sobrenome: {value: 'Smith',enumerable: true, writable: true},
    idade: {value: '27',enumerable: true, writable: true}
})

console.log(usuario8)

console.log('----------------------------')

// Selando um objeto globalmente

Object.preventExtensions() // Object.preventExtensions(obj)
    // -> proibe adição de novas propriedades ao objeto
Object.seal()
    // -> proibe adição/remoção de propriedades. Seta configurable: false para todas as propriedades existentes
Object.freeze()
    /*  -> proibe adição/remoção/alteração de propriedades. Seta configurable: false, writable: false para 
         todas as propriedades existentes */
Object.isExtensible()
    // -> retorna false se adição de propriedades é proibida, caso contrário true
Object.isSealed()
    /*  -> retorna true se adição/remoção de propriedades é proibida, e todas as propriedades existentes 
      possuem configurable: false */
Object.isFrozen()
    /*  -> retorna true se adição/remoção/alteração de propriedades é proibida, e todas propriedades atuais 
       são configurable: false, writable: false */
