//  Number.prototype.name = value
/*
     The prototype constructor allows you to add new properties and methods to JavaScript numbers.

When constructing a property, ALL numbers will be given the property, and its value, as default.

When constructing a method, ALL numbers will have this method available.

Note: Number.prototype does not refer to a single number object, but to the Number() object itself.

Note: Prototype is a global object constructor which is available for all JavaScript objects.    

*/

Number.prototype.numero = 7

var x = 6
var y = x.numero

Number.prototype.minhafuncao = function () {
    return this.valueOf()/3
}

var num = 39
var outro_valor = num.minhafuncao()


console.log(y)
console.log(outro_valor)
