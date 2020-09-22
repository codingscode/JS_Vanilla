/*
class nome_da_classe {
  // corpo da classe...
}


A class is a type of function, but instead of using the keyword function to initiate it, we use the 
keyword class, and the properties are assigned inside a constructor() method.

The constructor() method is called each time the class object is initialized.

Note: Unlike functions, and other JavaScript declarations, class declarations are not hoisted (you must declare
a class before you can use it).

Note: The syntax in classes must be written in "strict mode".

For more information about classes, read our JavaScript Classes Tutorial.



*/

class Produto {
    constructor(tipo) {
        this.tipoproduto = tipo
    }
}

let meu_produto = new Produto('natural')

console.log(meu_produto) 
console.log('------------------\n')

class Escritorio {
    constructor(nome) {
       this.nome_produto = nome
    }

    complemento() {
        return `Eu tenho um ${this.nome_produto}`
    }
}

const minha_frase = new Escritorio('Caderno')
console.log(minha_frase.complemento())  // ou Escritorio.complemento() com static antes de complemento() {...} na linha 39
console.log(minha_frase)  

console.log('------------------\n')


class Compra {
    constructor(nome) {
       this.nome_produto = nome
    }

    expensa(custo) {
        return `Eu comprei um(a) ${this.nome_produto}, que foi ${custo} reais`
    }
}

const minha_frase2 = new Compra('Caneta')
console.log(minha_frase2.expensa(3))
console.log(minha_frase2)

console.log('------------------\n')
console.log('Herança:  \n')


class Aquisicao {
     constructor(nome) {
        this.nomeproduto = nome
     }
     frase() {
         return `Eu tenho um ${this.nomeproduto}`
     }
}

class Garantia extends Aquisicao {
    constructor(nome, tempo) {
        super(nome)
        this.prazo = tempo
    }

    mostrar() {
        return this.frase() + ' e sua garantia é de ' + this.prazo + ' ano'
    }
}

const meu_novo_produto = new Garantia('Computador', 1)
console.log(meu_novo_produto.mostrar())
console.log(meu_novo_produto)

console.log('-------------------\nGetters e Setters\n')

class Produto2 {
    constructor(nome) {
        this._nomeproduto = nome
    }

    get p_nome() {
        return this._nomeproduto
    }

    set p_nome(x) {
        this._nomeproduto = x
    }
}

let meu_produto2 = new Produto2('Impressora') 

console.log(meu_produto2.p_nome)
console.log(meu_produto2)


class Produto3 {
    constructor(nome) {
        this._nomeproduto = nome
    }

    get p_nome() {
        return this._nomeproduto
    }

    set p_nome(x) {
        this._nomeproduto = x
    }
}

let meu_produto3 = new Produto3('Webcam') 
console.log(meu_produto3.p_nome)
console.log(meu_produto3)

meu_produto3.p_nome = 'Mouse'

console.log(meu_produto3.p_nome)
console.log(meu_produto3)

/*
Hoisting
Unlike functions, and other JavaScript declarations, class declarations are not hoisted.

That means that you must declare a class before you can use it:
*/