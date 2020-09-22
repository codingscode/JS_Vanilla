//
/*


*/


var numero1 = 8
numero1 += 2
numero1 += 2

console.log('numero1 : ' + numero1)

var numero2 = 20
numero2 -= 1
numero2 -= 1

console.log('numero2 : ' + numero2)

var numero3 = 3
numero3 *= 2
numero3 *= 4

console.log('numero3 : ' + numero3)


var numero4 = 100
numero4 /= 4
numero4 /= 5

console.log('numero4 : ' + numero4)

var numero5 = 100
numero5 %= 70   // resto 30
numero5 %= 18  

console.log('numero5 : ' + numero5)
console.log('---------------')


var frase1 = 'antes separados'
var frase2 = ' e agora juntos' 
frase1 += frase2  // ou frase1 = frase1 + frase2

console.log(frase1)
console.log('-----------------')

// == compara valores   , === campara valor juntamente com tipo

var valor1 = 3  //valor 3 tipo numero
var valor2 = 4  
var valor3 = '3'  //valor 3 tipo string
var valor4 = true  //valor true booleano
var valor5 = 'true'  //valor true string

var verificacao1 = valor1 == valor2
var verificacao2 = valor1 == valor3
var verificacao3 = valor1 > valor2
var verificacao4 = valor4 == valor5

var verificacao5 = valor1 === valor2
var verificacao6 = valor1 === valor3
var verificacao7 = valor1 !== valor2
var verificacao8 = valor4 === valor5


console.log(`verificacao1 : ${verificacao1}`)
console.log(`verificacao2 : ${verificacao2}`)
console.log(`verificacao3 : ${verificacao3}`)
console.log(`verificacao4 : ${verificacao4} \n`)

console.log(`verificacao5 : ${verificacao5}`)
console.log(`verificacao6 : ${verificacao6}`)
console.log(`verificacao7 : ${verificacao7}`)
console.log(`verificacao8 : ${verificacao8}`)
console.log('--------------------')

// Operador condicional ternario

var idade = 21
var caso1 = 'bem jovem'
var caso2 = 'adulto'

var conclusao = idade < 18 ? caso1 : caso2

console.log(`a conclusão é : ${conclusao}`)

console.log('--------------------------')

var bol1 = true
var bol2 = false

var conclus1 = bol1 && bol2
var conclus2 = bol1 && bol1
var conclus3 = bol2 && bol2
var conclus4 = bol1 || bol1
var conclus5 = bol2 || bol2
var conclus6 = bol1 || bol2

var conclus7 = !bol2

console.log(`conclus1 é ${conclus1}`)
console.log(`conclus2 é ${conclus2}`)
console.log(`conclus3 é ${conclus3}`)
console.log(`conclus4 é ${conclus4}`)
console.log(`conclus5 é ${conclus5}`)
console.log(`conclus6 é ${conclus6}`)
console.log(`conclus7 é ${conclus7}`)

console.log('--------------------------')

var objeto_1 = {nome: 'fabiola', sobrenome:'pinto', idade: 19}
console.log(objeto_1)

delete objeto_1.sobrenome   // o operador delete apaga uma propriedade de um objeto
console.log(objeto_1)

console.log('--------------------------\nmatrizes e objetos\n')

// The in operator returns true if the specified property is in the specified object, otherwise false:

   // com matrizes
   var carros_1 = ['fusca', 'fiat', 'mercedes', 'celta']
   console.log('gol' in carros_1)   // especifique o número indice invés do valor
   console.log('fusca' in carros_1)
   console.log(carros_1.includes('fusca'))
   console.log(carros_1.includes('gol'))
   console.log(2 in carros_1)
   console.log(4 in carros_1)
   console.log('length' in carros_1)  //uma propriedade que existe
   console.log('--------------------------')

   // com objetos
   var pessoa_1 = {nome: 'mariana', sobrenome: 'gomes', idade: 18}
   console.log('nome' in pessoa_1)
   console.log('idade' in pessoa_1)
   console.log('altura' in pessoa_1)
   console.log(Object.values(pessoa_1).includes('mariana'))
   console.log(Object.values(pessoa_1).includes('gomes'))
   console.log(Object.values(pessoa_1).includes(50))
   console.log('--------------------------')

   // com objetos predefinidos
   
   console.log('PI' in Math)
   console.log('NaN' in Number)
   console.log('length' in String)
   console.log('--------------------------\ninstaceof\n')


// Operador instanceof

var carros_2 = ['opala', 'brasilia', 'uno', 'kadett', 'saveiro']
console.log(carros_2 instanceof Array)
console.log(carros_2 instanceof Object)
console.log(carros_2 instanceof Number)
console.log(carros_2 instanceof String)
console.log('--------------------------')

var ob = {nome:'rui', idade: 16}
var arri = [5, 7, 12, 10]

console.log(Object.keys(ob))
console.log(Object.values(ob))
