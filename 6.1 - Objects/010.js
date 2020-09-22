// https://javascript.info/optional-chaining

// Optional chaining '?.'
// Encadeamento Opcional '?.'

let usuario1 = {}

//console.log(usuario1.endereco.rua) // dá erro
console.log(usuario1 && usuario1.endereco && usuario1.endereco.rua)  //antigamente

console.log(usuario1?.endereco?.rua) // sem erro
console.log('----------------------')

let usuario2 = null

console.log(usuario2?.endereco)
console.log(usuario2?.endereco.rua)
console.log(usuario2?.endereco.rua.qualquercoisa)

// The optional chaining only tests for null/undefined, doesn’t interfere with any other language mechanics.

console.log('----------------------')

let usuario3 = null
let x = 0

usuario3?.digaEba(x++)
console.log(x)

console.log('----------------------')

// ?.() is used to call a function that may not exist.

let usuario4 = {
    administrador() { return 'Eu sou administrador'}
}

let usuario5 = {}

console.log('usuario4', usuario4.administrador?.())
console.log('usuario5', usuario5.administrador?.())
console.log('----------------------------')

let usuario6 = { primeiroNome: 'Kyle'}

let usuario7 = null
let chave = 'primeiroNome'

console.log(usuario6?.[chave])
console.log(usuario7?.[chave])
console.log(usuario6?.[chave]?.algo?.nao?.existe)

//usuario6?.sobrenome = 'Smith' // dá erro
