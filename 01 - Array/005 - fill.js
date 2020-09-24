// fill() - preenche todos os elementos por um outro
/*
    array.fill(valor, inicio, fim)
    valor -	Exigido. o valor para preencher o array
    inicio -	Opcional. caso omisso o padrão é zero
    fim	- Opcional. The index to stop filling the array (default is array.length)
*/

var frutas = ['banana', 'laranja', 'melão', 'maçã', 'melancia']
frutas.fill('uva')

console.log(frutas)

var carros = ['corsa', 'celta', 'audi', 'linea', 'gol', 'mercedes', 'hillux']

carros.fill('ferrari', 1, 5)  // até ?-1

console.log(`carros: ${carros}`)