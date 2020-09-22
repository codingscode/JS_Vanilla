// https://javascript.info/object
// propriedades computadas

let oque = 'fruta'

let sacola = {[oque]: 'maça'}

console.log(oque)
console.log(sacola)
console.log(sacola.oque)
console.log(sacola.fruta)
console.log('--------------------')

let material = 'caneta'
let aquisicao = {}

aquisicao[material] = 3

console.log(aquisicao)
console.log('---------------')

// atalho valor propriedade
function criarUsuario(nome, idade) {
    return {nome: nome, idade: idade}  // ou só {nome, idade}
}

let usuario = criarUsuario('Simon', 21)
console.log(usuario.nome)
console.log('---------------')

// limitações de nomes de propriedades -> palavras reservados n tem problema como propriedades
let objeto1 = {for: 1, let: 2, return: 3}

console.log(objeto1.for + objeto1.let + objeto1.return)
console.log('---------------')

//
let verificar1 = {nome: 'Bob', idade: 15}
let verificar2 = {nome: 'Bob', idade: 15}

console.log(verificar1 == verificar2)
console.log('--------------------------')

let objeto2 = { 0: 'teste'}  // mesmo que "0": "teste"
  
// both alerts access the same property (the number 0 is converted to string "0")
console.log( objeto2['0'] ) // teste
console.log( objeto2[0] ) // teste (same property)

console.log('---------------------')

let objeto3 = {}
objeto3.__proto__ = 5  //assinala um numero
console.log(objeto3.__proto__)  // [object Object] - o valor é um objeto, n funcionou com pretendido

console.log('-------------------------')
// Property existence test, “in” operator

let usuario2 = {}
console.log(usuario2.nome)
console.log(usuario2.nome === undefined)

let usuario3 = {nome: 'Zib', idade: 10}
console.log('nome' in usuario3)
console.log('nao_tem' in usuario3)

console.log('-----------------')

let usuario4 = {nome: 'Chico', idade: 20, administrador: true}

for (chave in usuario4) {
   console.log(`${chave} : ${usuario4[chave]}`)
}

console.log('------------------')

let codigos = {'49': 'alemanha', '41': 'suíça', '44': 'reino unido', '1': 'eua'}

for (let codigo in codigos) {
    console.log(codigo)
}

console.log('------------------')

let usuario5 = {nome: 'Jimmy', sobrenome: 'Smith'}
usuario5.idade = 15

// non-integer properties are listed in the creation order
for (let propriedade in usuario5) {
    console.log(propriedade)
}

console.log('----------------------')

let codigos2 = {'+49': 'alemanha', '+41': 'suíça', '+44': 'reino unido', '+1': 'eua'}

// aparece na ordem que tá
for (let codigo in codigos2) {
    console.log(codigo)
}

console.log('----------------------')

let compras = {valor: 120.00, quantitens: 3, tipo: 'eletronicos', parcelado: false}

//console.log(valor in compras)  // dá erro
console.log('valor' in compras)


console.log('----------------------')

function estaVazio(objeto) {
    for (var chave in objeto) {
        if(objeto.hasOwnProperty(chave))
            return false;
    }
    return true;
}


let planejamento = {}

console.log(estaVazio(planejamento))

planejamento['8:30'] = 'levantar'

console.log(estaVazio(planejamento))

console.log('------------------------')


let salarios = {vicente: 2000, paola: 3000, simon: 1500}

let soma = 0

for (let chave in salarios) {
   soma += salarios[chave]
}

console.log('soma: ' + soma)

console.log('------------------------')

function somarNumerico(objeto) {
    soma = 0
    for (let chave in objeto) {
        if (isNaN(objeto[chave]) == false) {
            soma += objeto[chave]
        }
    }
    return soma
}

function multiplicarNumerico(objeto) {
    for (let chave in objeto) {
        if (typeof objeto[chave] == 'number') {
            objeto[chave] *= 2
        }
    }
}

let menu = {largura: 200.5, altura: 300.5, titulo: 'Meu Menu'}

console.log(menu)

multiplicarNumerico(menu)

console.log(somarNumerico(menu))
console.log(menu)
