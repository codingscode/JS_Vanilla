//
let meu_json = '{"idade": 30}'

try {
    let usuario = JSON.parse(meu_json)
    if (!usuario.nome) {
       throw new SyntaxError('Dado incorreto: sem nome propriedade')
    }
    console.log(usuario.nome)
}
catch (erro) {
   console.log('Erro de JSON: ' + erro.message)
   console.log(erro.name)
}
