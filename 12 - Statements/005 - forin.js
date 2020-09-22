/*
for (elemento in objeto) {
  codigo de bloco a ser usado
}

The for/in statement loops through the properties of an object.

The block of code inside the loop will be executed once for each property.

*/

const produto = {nome: 'bicicleta', preco: '400', marca: 'caloi', cor: 'marrom'}

for (cada in produto) {
    console.log(`${cada} : ${produto[cada]}`)
}
