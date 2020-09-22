// extends   -  class childClass extends parentClass
/*
The extends keyword is used to create a child class of another class (parent).

The child class inherits all the methods from another class.

Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.

Note: From the example above; The super() method refers to the parent class. 
By calling the super() method in the constructor method, we call the parent's constructor method and 
gets access to the parent's properties and methods.
*/

class Pai {
    constructor(cor) {
      this.cor_olho = cor;
    }
    apresentacao() {
      return 'Eu tenho olho ' + this.cor_olho;
    }
}
  
class Filho extends Pai {
    constructor(cor, cor2) {
       super(cor);
       this.cabelo = cor2;
    }
    mostrar() {
       return this.apresentacao() + ', e meu cabelo é ' + this.cabelo;
    }
}
  
const pessoa = new Filho('verde', 'ruivo');
console.log(pessoa.mostrar())



