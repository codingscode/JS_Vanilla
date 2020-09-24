// prototype -  Array.prototype.name = value
/*
The prototype constructor allows you to add new properties and methods to the Array() object.

When constructing a property, ALL arrays will be given the property, and its value, as default.

When constructing a method, ALL arrays will have this method available.

Note: Array.prototype does not refer to a single array, but to the Array() object itself.

Note: Prototype is a global object constructor which is available for all JavaScript objects.
*/

var assuntos = ['politica', 'economia', 'cultura', 'sociedade', 'tecnologia']

Array.prototype.maiuscula = function() {
    for (var i=0; i<assuntos.length; i++) {   // no lugar de assuntos pode ser this
        this[i] = this[i].toUpperCase()
    }
}

assuntos.maiuscula()

console.log(assuntos)

console.log('----------')
