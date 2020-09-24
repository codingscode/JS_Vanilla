// https://javascript.info/constructor-new
let objeto = {}

function A() {
  //return 'x'
  return objeto
}

function B() {
  //return 'x'
  return objeto
}

let a = new A
let b = new B

console.log( a == b ) // true

console.log('-----------------------------')

function Calculadora() {
    this.ler = function() {
        this.a = 5
        this.b = 6
    }

    this.somar = function() {
        return this.a + this.b
    }

    this.multiplicar = function() {
        return this.a * this.b
    }
}

let calculadora = new Calculadora()

calculadora.ler()

console.log('Soma: ' + calculadora.somar())
console.log('Multiplicar: ' + calculadora.multiplicar())

console.log('-----------------------------')

function Acumulador(valorinicial) {
    this.valor = valorinicial

    this.ler = function() {
        this.valor += 3
    }
}

let acumulador = new Acumulador(2)  // valor inicial 2

acumulador.ler()  // adiciona o valor de entrada de usuário
acumulador.ler()  // adiciona o valor de entrada de usuário

console.log(acumulador.valor)  // mostra a soma destes valores
console.log(acumulador)