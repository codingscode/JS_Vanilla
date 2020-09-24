//

try {
   console.log(sem_referencia)
}
catch (erro) {
   console.log(erro.message)
}

console.log('-------------------\n')

var mensagem, x
mensagem = ''
x = 'xexéba'
  
try {
    if(x == '') throw 'vazio'
    if(isNaN(x)) throw 'não número'
    x = Number(x)
    if(x < 5) throw 'muito pequeno'
    if(x >= 5) throw 'muito grande'
}
catch(erro) {
    mensagem = 'A entrada é ' + erro
    console.log(mensagem)
}
