// PROPRIEDADES

var matriz = [2, 4, 0, -3, 10, 21]

//length
console.log(matriz.length)

// prototype  - permite adicionar propriedades e metodos a um array objeto

Array.prototype.adicionar = function() {
    for (var i=0;i<this.length;i++) {
        if(this[i]%2 == 0) {
            this[i] = this[i] + 1
        }
        else {
            this[i] = 'outro'
        }
        
    }
}

matriz.adicionar()    // adicionar() é como se fosse um método
console.log(matriz)

// constructor - retorna a função construtora de uma matriz
var transportes = ['moto', 'bicicleta', 'carro', 'patinete']

transportes.constructor

console.log(transportes.constructor)

