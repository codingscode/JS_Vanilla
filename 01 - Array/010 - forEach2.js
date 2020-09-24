//

const nomes = ['Mara', 'Eliza', 'Vanessa', 'Fabíola', 'Fernanda', 'Karlos', 'Carmen', 'Geovana', 'Jordana', 'Filipe']
const F = []
var novoIndice = 0

function comecaF(item, indice) {
     var p = []
     if(nomes[indice].indexOf('F') == 0) {
         F[novoIndice] = nomes[indice]
         novoIndice++
     }
}

nomes.forEach(comecaF)
console.log(F)

// Maior nome

var lista = ["Alberto", "Alex", "Sandro", "Ana Roberta", "Mary"];
var tamanhoNome = 0
var nome = ''
 
function maiorNome(item, indice) {
    if (lista[indice].length > tamanhoNome) {
        tamanhoNome = lista[indice].length;
        nome = lista[indice];
    }
}
 
lista.forEach(maiorNome);
console.log(nome);

