// https://javascript.info/property-accessors

// Propriedade getters and setters -> acessadores e setadores

let usuario1 = {
    nome: 'Vicente',
    sobrenome: 'Parlatore',
    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    }
}

console.log(usuario1)
console.log(usuario1.nomeCompleto)

console.log('-----------------------------------')

let usuario2 = {
    get nomeCompleto() {
        return ''
    }
}

usuario2.nomeCompleto = 'Teste1' // Erro (propriedade tem somente um getter)
console.log(usuario2)
console.log(usuario2.nomeCompleto)

console.log('-----------------------------------')

let usuario3 = {
    nome: 'Sebastian',
    sobrenome: 'Carry',
    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    },
    set nomeCompleto(valor) {
        [this.nome, this.sobrenome] = valor.split(' ')
    }
}

// nomeCompleto é virtual. legível e editável

console.log(usuario3)

// set nomeCompleto é executado com o valor dado
usuario3.nomeCompleto = 'Carl Adams'

console.log(usuario3)
console.log(usuario3.nome)
console.log(usuario3.sobrenome)

console.log('-----------------------------------')

// Accessor descriptors  -> descritores acessadores

     // aqui não há value ou writable
     // há enumerable, configurable, get e set

let usuario4 = {nome: 'Kevin', sobrenome: 'Davis'}

Object.defineProperty(usuario4, 'nomeCompleto', {
    get() {
        return `${this.nome} ${this.sobrenome}`
    },
    set(valor) {
        [this.nome, this.sobrenome] = valor.split(' ')
    }
})

console.log(usuario4)
console.log(usuario4.nomeCompleto)

for (let chave in usuario4) console.log(chave)
for (let valor of Object.values(usuario4)) console.log(valor)

/*  Note que uma propriedade pode ser tanto um accessor (ter metods get/set) ou uma propriedade de dado (ter um value), não 
ambos.    Se nós testamos fornecer ambos get e value no mesmo descriptor, haverá um erro        */

/* Object.defineProperty({}, 'prop', {
    get() {
      return 1
    },
    value: 2
}) */

console.log('-----------------------------------')

// Smarter getters/setters

let usuario5 = {
    get nome() {
      return this._nome
    },
  
    set nome(valor) {
      if (valor.length < 4) {
        console.log('nome curto demais, precisa pelo menos 4 caracteres')
        return
      }
      this._nome = valor
    }
}
  
usuario5.nome = 'Pete'
console.log(usuario5) 
console.log(usuario5.nome) 
  
usuario5.nome = '' 

console.log('-----------------------------------')

// Using for compatibility

function Usuario(nome, idade) {
    this.nome = nome
    this.idade = idade
}

let augustus = new Usuario('Augustus', 25)

console.log(augustus)
console.log(augustus.idade)


function Usuario1(nome, aniversario) {
    this.nome = nome
    this.aniversario = aniversario
}

let augustus2 = new Usuario1('Augustus2', new Date(1992, 6, 1))

console.log(augustus2)
console.log(augustus2.aniversario)


console.log('-----------------------------------')

function Usuario2(nome, aniversario) {
    this.nome = nome
    this.aniversario = aniversario
    // idade é calculada da data atual e aniversario
    Object.defineProperty(this, 'idade', {
        get() {
            let anoHoje = new Date().getFullYear()
            return anoHoje - this.aniversario.getFullYear()
        }
    })
}

let vicente = new Usuario2('Vicente', new Date(1989, 8, 4))

console.log(vicente)
console.log(vicente.aniversario)
console.log(vicente.idade)
