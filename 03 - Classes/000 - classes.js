// class
/*
A class is a type of function, but instead of using the keyword function to initiate it, 
 we use the keyword class, and the properties are assigned inside a constructor() method:
*/

class Carro {
    constructor(marca) {
        this.nomecarro = marca
    }
}

const meucarro = new Carro('Gol')   // cria um objeto de classe Carro

console.log(meucarro.nomecarro)
console.log(meucarro)

