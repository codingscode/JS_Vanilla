/*
JSON - 

JSON (JavaScript Object Notation)
JSON is a format for storing and transporting data.

JSON is text, and text can be transported anywhere, and read by any programming language.

JavaScript Objects can be converted into JSON, and JSON can be converted back into JavaScript Objects.

This way we can work with the data as JavaScript objects, with no complicated parsing or translations.

Valid Data Types
In JSON, values must be one of the following data types:

a string
a number
an object (containing valid JSON values)
an array
a boolean
null
JSON values cannot be one of the following data types:

a function
a date
undefined


*/

// objeto
var meu_objeto = {nome: "Vicente", idade: 18, cidade: "jeriquaquara"}
console.log(meu_objeto)
console.log(typeof meu_objeto)

//coverter para json
var meu_json = JSON.stringify(meu_objeto)

console.log(meu_json)
console.log(typeof meu_json)

// converter para objeto
var meu_objeto2 = JSON.parse(meu_json)

console.log(meu_objeto2)
console.log(meu_objeto2.nome)
console.log(typeof meu_objeto2)
console.log('---------------------')

/*
// armazenando dado como JSON, usando localStorage

var outro_objeto, outro_json, texto, obj

outro_objeto = {nome: 'Simon', idade: '17', cidade: 'guarapari'}
outro_json = JSON.stringify(outro_objeto)
localStorage.setItem('testeJson', outro_json)

// recuperando dado:
texto = localStorage.getItem('testeJson')
obj = JSON.parse(texto)

console.log(obj)
console.log(obj.nome)
console.log(typeof obj)
*/
