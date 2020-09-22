// indexOf() -  array.indexOf(item, start)

const frutas = ['goiaba', 'manga', 'melao', 'uva', 'laranja', 'jaca', 'tanja']

var qualindice = frutas.indexOf('laranja')

console.log(qualindice)

var outro = frutas.indexOf('uva', 6)  //passou, falso é -1
console.log(outro)