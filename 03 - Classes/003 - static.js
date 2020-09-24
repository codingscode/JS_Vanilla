// static -  static methodName()
/*
The static keyword defines static methods for classes.

Static methods are called directly on the class (Car from the example above) - without 
 creating an instance/object (mycar) of the class.
*/


class Carro {
    constructor(marca) {
      this.nomecarro = marca
    }
    static saudacao() {  // metodo estatico, sem stati dá erro
      return "Olá!!"
    }
}
  
const meucarro = new Carro("Ford")

console.log(Carro.saudacao())
console.log(Carro)
console.log('--------------')

class Carro2 {
    constructor(marca) {
      this.nomecarro2 = marca
    }
    static saudacao2(x) {
      return "Oi " + x.nomecarro2
    }
}
  
const meucarro2 = new Carro2("Gol")

console.log(Carro2.saudacao2(meucarro2))
console.log(meucarro2)