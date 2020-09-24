// continuação
var nome = 'de fora'

function UsuarioFazer() {
    return {nome: 'Tommy', ref: this}
}

let usuario = UsuarioFazer()

console.log(usuario.ref.nome)
console.log('----------------------')

function UsuarioFazer2() {
    return this
}

console.log(UsuarioFazer2().nome)


console.log('----------------------')

function UsuarioFazer3() {
    return {nome: 'Mario', /* idade: 40, */ref() {return this}}
}

let usuario2 = UsuarioFazer3()
console.log(usuario2.ref().nome)
console.log(usuario2.ref())

console.log('----------------------')

let calculadora = {
   somar() {return this.a + this.b}, multiplicar() { return this.a*this.b}, ler() { this.a = 3, this.b = 7}
}

calculadora.ler()

console.log(calculadora.somar())
console.log(calculadora.multiplicar())
console.log(calculadora.ler())
console.log(calculadora)

console.log('----------------------')

let escada = {
    passo: 0, pracima() { this.passo++}, prabaixo() { this.passo--}, mostrarPasso: function() { console.log(this.passo)}
}

console.log(escada)

escada.pracima()
escada.pracima()
escada.pracima()
escada.prabaixo()
escada.mostrarPasso()


//escada.pracima().pracima().prabaixo().mostrarPasso()  // dá erro

console.log('----------------------')

let escada2 = {
    passo: 0, 
    pracima() {
        this.passo++
        return this
    },
    prabaixo() {
        this.passo--
        return this
    },
    mostrarPasso() {
        console.log(this.passo)
        return this
    }
}

escada2.pracima().pracima().pracima().prabaixo().mostrarPasso()
