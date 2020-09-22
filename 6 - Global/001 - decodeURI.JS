// decodeURI - decodeURI(uri)


var uri = 'o caça passou, o sabiá canta' // "my test.asp?name=ståle&car=saab" // https://www.youtube.com/watch?v=qaSwiYBC3sk
var encodar = encodeURI(uri)

console.log(encodar)

var decodar = decodeURI(encodar);
var resposta = `${encodar}\n ${decodar}`

console.log(resposta)