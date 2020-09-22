// https://javascript.info/constructor-new

// operador 'new' Constructor

    // função Constructor

function Usuario(nome) {
    this.nome = nome
    this.eAdministrador = false
}

let usuario1 = new Usuario('Peter')

console.log(usuario1.nome)
console.log(usuario1.eAdministrador)

console.log('-------------------------')

/* como funciona
function Usuario(nome) {
  // this = {}  (implicitly)

  // add properties to this
  this.nome = nome
  this.eAdministrador = false

  // return this  (implicitly)
}

--------------------------------  mesma coisa que:
let usuario = new Usuario('Jack') 

let usuario = {
  nome: 'Jack',
  eAdministrador: false
}

*/
   

function Usuario2() {
   console.log(new.target)
}

Usuario2()
new Usuario2()

console.log('-----------------------')

function Usuario3(nome) {
    if (!new.target) {   // se voce me executar sem new
       return new Usuario3(nome)  // adiciono new para voce
    }
    this.nome = nome
}

let usuario3 = Usuario3('simon')  // redireciona call para new Usuario3
console.log(usuario3.nome)  // simon

console.log('-----------------------')

// retorno de constructors
   // 1º caso: Se return é chamado com um objeto, então o objeto é retornado invés disto
function UsuarioMaior() {
    this.nome = 'Kyle'
    return {nome: 'Godzilla'} // returns this object
}

console.log(new UsuarioMaior().nome) // Godzilla, got that object
console.log(new UsuarioMaior()) // Godzilla, got that object


   // 2º caso: Se return é chamado com um primitivo, isso é ignorado
function UsuarioMenor() {
    this.nome = 'Simon'
    this.idade = 19
    return
}

console.log(new UsuarioMenor().nome)
console.log(new UsuarioMenor())  // poder ser também apenas new UsuarioMenor

console.log('-----------------------')

function Usuario4(nome) {
    this.nome = nome

    this.digaOla = function() {
       console.log('Meu nome é : ' + this.nome)
    }
}
 
let usuario4 = new Usuario4('Kyle')

usuario4.digaOla()

/*  mesmo que:
usuario4 = {nome: 'Kyle', digaOla: function() {...}}
 */

console.log('-----------------------')