// every(function) - verifica se todos os elementos de um array satisfazem a condição de uma função

/* function(currentValue, index, arr) -> Required. A function to be run for each element in the array.
Function arguments:
          currentValue - Required. The value of the current element
          index	- Optional. The array index of the current element
          arr -	Optional. The array object the current element belongs to

*/

var idades = [31, 10, 14, 21, 25, 16, 20, 27]

var listas = [{nome: 'flavio', resposta: 'nao'},
              {nome: 'maria', resposta: 'nao'},
              {nome: 'ana', resposta: 'sim'},
              {nome: 'ricardo', resposta: 'nao'}
             ]

function verificarIdade(idade) {
    return idade >= 18
}

function outra(idade) {
    return idade >= 10
}

function respigual (elemento, indice, array) {
    if (indice === 0) {
       return true
    }
    else {
        return elemento.resposta === array[indice -1].resposta
    }
}

function minhafuncao(funcao) {
    console.log(idades.every(funcao))  
}

function minhafuncao2(funcao) {
    console.log(listas.every(funcao))  
}

console.log('todos tem 18 ou mais ?')
minhafuncao(verificarIdade)
console.log('todos tem 10 ou mais ?')
minhafuncao(outra)
console.log('todos tem a mesma resposta ?')
minhafuncao2(respigual)






