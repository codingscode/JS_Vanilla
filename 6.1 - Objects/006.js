// https://javascript.info/object-methods

function saldacao() {
    return this.nome
}

let usuario = {nome: 'Vicente'}
let administrador = {nome: 'Tom'}

// usar a mesma função em dois objetos
usuario.funcao = saldacao
administrador.funcao = saldacao

// these calls have different this
// "this" inside the function is the object "before the dot"
console.log(usuario.funcao())   // Vicente  (this == user)
console.log(administrador.funcao())  // Admin  (this == admin)

console.log(administrador['funcao']())  // Admin (dot or square brackets access the method – doesn't matter)
console.log('------------------------')

let usuario2 = {primeiro_nome: 'Geovana', saldacao() { 
                  let arrow = () => { return this.primeiro_nome }  // arrow function pega de fora
                  return arrow()
               }}

console.log(usuario2)
console.log(usuario2.saldacao())

console.log('--------------------')
