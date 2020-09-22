// https://javascript.info/garbage-collection

// Coleção lixo
// Alcançabilidade

function casar(homem, mulher) {
    mulher.esposo = homem
    homem.esposa = mulher
  
    //return `{pai: ${homem}, mae: ${mulher}}`
    return {pai: homem, mae: mulher}
}
  
let familia = casar({nome: 'John'}, {nome: 'Ann'})
console.log(familia)

console.log('------------------------------')

delete familia.pai
delete familia.mae.esposo

console.log(familia)
