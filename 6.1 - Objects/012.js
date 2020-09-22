// https://javascript.info/object-toprimitive
// https://javascript.info/type-conversions

// Objeto para conversão primitiva

let objeto1 = {nome: 'paulo', idade: 13}

console.log(objeto1)

let outroObjeto = {}

// usando objeto como chave-propriedade
outroObjeto[objeto1] = 123

console.log(outroObjeto)

// conversão explicita
let num1 = Number(objeto1)
console.log(num1)

// maths (except binary plus)
let n = +('345')   // unary plus
console.log('n', n, typeof n)

let data1 = (new Date('08/03/2020')).getTime()
let data2 = (new Date('08/10/2020')).getTime()

console.log((data2 - data1)/(1000*60*60*24), 'dias')

/* let a = (new Date('08/03/2020')).toLocaleDateString()   // m/d/a
let b = (new Date('08/10/2020')).toLocaleDateString()   // m/d/a

// console.log(b - a)  // dá erro 
let a1 = (new Date('08/03/2020')).getTime()
let b1 = (new Date('08/10/2020')).getTime()

console.log((b1 - a1)/(1000*60*60*24))

*/

console.log('--------------------------')

let usuario1 = {nome: 'tom', dinheiro: 2000, 
     [Symbol.toPrimitive](hint) {
        console.log(`dica: ${hint}`)
        return hint == "string" ? `{nome: "${this.nome}"}` : this.dinheiro
     }
}

console.log('1', usuario1)
console.log('2', +usuario1)
console.log('3', usuario1 + 500)

console.log('--------------------------------')

// toString/valueOf
let usuario2 = {nome: 'Vicente'}

console.log(usuario2)
console.log(usuario2.valueOf())
console.log(usuario2.valueOf() === usuario2)
console.log(usuario2.toString())

console.log('-------------------------------')

// Por exemplo, aqui usuario3 faz o mesmo como acima usando uma combinação de toString e valueOf invés de Symbol.toPrimitive

let usuario3 = {nome: 'ambrosio', dinheiro: '100',
     toString() {
        return `{nome: '${this.nome}'}`
     },
     valueOf() {
        return this.dinheiro
     }
}

console.log('*', usuario3)
console.log('**', usuario3.toString())
console.log('***', usuario3.valueOf())
console.log('****', +usuario3)
console.log('*****', usuario3 + 500)


console.log('--------------------')

let usuario4 = {
    nome: 'Cesar',
    toString() {
       return this.nome
    }
}

console.log(usuario4)
console.log(usuario4 + 500)

console.log('---------------------------')

let objeto2 = {
   // toString() gerencia todas conversões na falta de outros métodos
   toString() {
      return '2'
   }
}

console.log(objeto2)
console.log(objeto2 * 3)  //  , objeto convertido para primitivo "2", então multiplicação o faz um numero
console.log(objeto2 + 4)  // concatena

console.log('---------------------------')
console.log(1 + 2)
console.log('1' + 3)
console.log(2 + '5')
console.log('a' + 'b')
console.log('d' + 5)
console.log(1 + (+'2'))
console.log((+'b'))