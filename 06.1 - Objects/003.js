// https://javascript.info/object-copy

// cópia objeto, referencias

let mensagem = 'olá'
let frase = mensagem
console.log(mensagem)
console.log(frase)

// objeto não armazena o valor em si, mas sim seu endereço na memória
let usuario = {nome: 'Bob'}
let administrador = usuario

console.log(usuario)
console.log(administrador)

administrador.nome = 'Simon'

console.log(usuario)
console.log(administrador)
console.log('------------------')

let objeto_a = {x: 1}
let objeto_b = objeto_a

console.log(objeto_a == objeto_b)  // true, ambas variaveis referenciam o mesmo objeto
console.log(objeto_a === objeto_b)

let outro_a = {y: 2}
let outro_b = {y: '2'}

console.log(outro_a == outro_b)
console.log(outro_a.y == outro_b.y)    // ambos valores propriedades tem o mesmo valor mas n o mesmo tipo
console.log(outro_a.y === outro_b.y)
console.log(outro_a === outro_b)
console.log('-------------------')

// clonando e mesclando , Object.assign

let usuario2 = {nome: 'Bob', idade: 19}
console.log('usuario2: ', usuario2)

let clone = {}
console.log('clone: ', clone)

//  vamos copiar todos propriedades de usuario nisso
for (let chave in usuario2) {
    clone[chave] = usuario2[chave]
}

// agora o clone é objeto inteiramente independente com o mesmo conteudo
clone.nome = 'Peter'; // mudou o dado nisso
clone.idade = 23; //      mudou o dado nisso

console.log(usuario2.nome)  
console.log('usuario: ', usuario2)  //
console.log('clone: ', clone)  // 
console.log('----------------------\n') 

// Object.assign(dest, [src1, src2, src3...])

let usuario3 = {nome: 'Phillips'}

let permissao1 = {podeVer: true}
let permissao2 = {podeEditar: true}

// copia todas propriedades de permissao1 e permissao2 para dentro de usuario3
Object.assign(usuario3, permissao1, permissao2)

console.log(usuario3)

// Se a propriedade copiada já existe, esta fica sobrescrita
Object.assign(usuario3, {nome: 'Isaac'})

console.log(usuario3)
console.log('------------------')

let usuario4 = {nome: 'Ashley', idade: 21}

// Isso copia todas propriedades de usuario4 para dentro do objeto vazio e o retorna
let um_clone = Object.assign({}, usuario4)

console.log('usuario4: ', usuario4)
console.log('um_clone: ',um_clone)

usuario4.nome = 'Monalisa'

console.log('usuario4: ', usuario4)
console.log('um_clone: ',um_clone)
console.log('--------------------------')

let usuario5 = {nome: 'Cecilia', tamanhos: {altura: 182, largura: 50}}
console.log('usuario5: ', usuario5)

let um_clone2 = Object.assign({}, usuario5)
console.log('um_clone2: ', um_clone2)

console.log(usuario5.tamanhos === um_clone2.tamanhos)  // true, mesmo objeto
// usuario5 e um_clone2 compartilham tamanhos
usuario5.tamanhos.largura++ // altera uma propriedade de um lugar

console.log(um_clone2.tamanhos.largura)

console.log('usuario5: ', usuario5)
console.log('um_clone2: ', um_clone2)