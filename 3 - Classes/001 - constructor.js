// constructor() -  constructor(parameters)
/*
The constructor() method is a special method for creating and initializing objects created within a class.

The constructor() method is called automatically when a class is initiated, and it has to have the exact name 
 "constructor", in fact, if you do not have a constructor method, JavaScript will add an invisible and empty 
 constructor method.

Note: A class cannot have more than one constructor() method. This will throw a SyntaxError.

You can use the super() method to call the constructor of a parent class (see "More Examples" below).

To create a class inheritance, use the extends keyword.

A class created with a class inheritance inherits all the methods from another class

The super() method refers to the parent class.

By calling the super() method in the constructor method, we call the parent's constructor method
 and gets access to the parent's properties and methods.
*/

class Carro {
    constructor(marca) {
        this.nomecarro = marca
    }

    apresentar() {
        return `Eu tenho um ${this.nomecarro}`
    }

}

class Modelo extends Carro {
    constructor(marca, mod) {
        super(marca)
        this.modelo = mod
    }

    mostrar() {
        return `${this.apresentar()}, é um ${this.modelo}`
    }
} 

const meucarro = new Modelo('Fiat', 'Uno')

console.log(meucarro.mostrar())