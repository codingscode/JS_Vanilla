// stringify() -  JSON.stringify(obj, replacer, space)
/*
obj - Required. The value to convert to a string
replacer - Optional. Either a function or an array used to transform the result. The replacer is called for each item.
space -	Optional. Either a String or a Number. A string to be used as white space (max 10 characters),
or a Number, from 0 to 10, to indicate how many space characters to use as white space.


The JSON.stringify() method converts JavaScript objects into strings.

When sending data to a web server the data has to be a string.

*/

var mercadoria = {produto: "bicicleta", preco: 300, cor: "marrom"}

var meu_json = JSON.stringify(mercadoria)

console.log(`${meu_json}, e seu tipo é ${typeof meu_json}`)

console.log('----------------')

var texto = JSON.stringify(mercadoria, (chave, valor) => {
    if (chave == "cor") {
      return valor.toUpperCase()
    }
    else {
      return valor
    }
})

console.log(texto)

console.log('----------------')


var texto2 = JSON.stringify(mercadoria, null, 10)   // 10 espaços

console.log(texto2)
console.log('----------')

var texto3 = JSON.stringify(mercadoria, null, 'ESPACO') 

console.log(texto3)
