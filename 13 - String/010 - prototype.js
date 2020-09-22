/*
object.prototype.name = value

The prototype property allows you to add new properties and methods to existing object types.
Note: Prototype is a global property which is available with almost all JavaScript objects.

*/

function produto(nome, preco, parcelas) {
    this.nome = nome
    this.preco = preco
    this.parcelas = parcelas
}

produto.prototype.cor = 'verde'

var compra1 = new produto('bicicleta', 5000, 10)

console.log(compra1.cor)
console.log(compra1)
