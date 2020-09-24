// https://javascript.info/object-methods

// métodos objetos 'this'
let usuario1 = {nome: 'Fabíola', idade: 18}

usuario1.saldacao = function () {
    console.log('Olá!')
}

usuario1.saldacao()
console.log(usuario1)
console.log('-----------------------------')

let usuario2 = {nome: 'Fabíola', idade: 18, saldacao() { return 'Olá!!!'}}
console.log(usuario2)
console.log(usuario2.saldacao())
console.log('-----------------------')

let usuario3 = {nome: 'Fabíola', idade: 18, saldacao() { return this.nome}}  // return `${usuario2.nome}`
console.log(usuario3)
console.log(usuario3.saldacao())
console.log('-----------------------')

let usuario4 = {nome: 'Fabíola', idade: 18, saldacao() { return `${usuario4.nome}`}}  
console.log(usuario4)
console.log(usuario4.saldacao())
console.log('-----------------------')
