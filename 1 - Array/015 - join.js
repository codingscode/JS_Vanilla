// join() - array.join(separator);    Convert the elements of an array into a string
/* Optional. The separator to be used. If omitted, the elements are separated with a comma */


var frase = ['a', 'rua', 'é', 'tranquila', 'à', 'tarde']
var junto = frase.join(' ')

var outro = ['Minha', 'terra', 'tem', 'palmeiras', 'Onde', 'canta', 'o', 'Sabiá', 'As', 'aves', 'que', 'aqui', 'gorjeiam', 'Não', 'gorjeiam', 'como', 'lá']
var unido = outro.join('****')


console.log(junto)
console.log(unido)
