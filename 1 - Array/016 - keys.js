// keys() - returns an Array Iterator object with the keys of an array.
/* Note: this method does not change the original array.
array.keys()
*/

var produtos = ['pen drive', 'playstation', 'hd externo', 'Pc desktop', 'notebook', 'mini system']
var pessoa = {olho: 'verde', sexo: 'f', altura: 1.8, massa: 77}

var chave = produtos.keys()


for (x of chave) {
    console.log(x)
}


console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))

console.log('--------------')

const frutas = ['goiaba', 'manga', 'melao', 'uva']
var chave2 = frutas.keys()

console.log(chave2.next())
console.log(chave2.next())
console.log(chave2.next())
console.log(chave2.next())
console.log(chave2.next())
