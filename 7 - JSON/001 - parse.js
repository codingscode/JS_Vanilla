//parse() - JSON.parse(string, function)    o último parametro é facultativo
/*
The JSON.parse() method parses a string and returns a JavaScript object.

The string has to be written in JSON format.

The JSON.parse() method can optionally transform the result with a function.
*/

// json em string
var json = '{"nome": "elisabeth", "idade": 21}'

// string json para objeto
var objeto = JSON.parse(json)

console.log(objeto)
console.log('-----------------------')

var texto = '{"nome": "raul", "idade": 18, "cidade": "jeriquaquara"}'

var objeto2 = JSON.parse(texto, (chave, valor) => {
    if (chave == "cidade") {
       return valor.toUpperCase()
    }
    else {
       return valor
    }
})

console.log(objeto2)
console.log(`${objeto2.nome}, ${objeto2.cidade}`)

console.log('-----------------------')
