/*
Date.prototype.nome = valor


The prototype constructor allows you to add new properties and methods to the Date() object.
When constructing a property, ALL date objects will be given the property, and its value, as default.
When constructing a method, ALL date objects will have this method available.
Note: Date.prototype does not refer to a single date object, but to the Date() object itself.
Note: Prototype is a global object constructor which is available for all JavaScript objects.

*/

Date.prototype.meuMes = function() {
    if (this.getMonth() == 0) { this.meuProp = 'Jan' }
    if (this.getMonth() == 1) { this.meuProp = 'Fev' }
    if (this.getMonth() == 2) { this.meuProp = 'Mar' }
    if (this.getMonth() == 3) { this.meuProp = 'Abr' }
    if (this.getMonth() == 4) { this.meuProp = 'Mai' }
    if (this.getMonth() == 5) { this.meuProp = 'Jun' }
    if (this.getMonth() == 6) { this.meuProp = 'Jul' }
    if (this.getMonth() == 7) { this.meuProp = 'Aug' }
    if (this.getMonth() == 8) { this.meuProp = 'Set' }
    if (this.getMonth() == 9) { this.meuProp = 'Out' }
    if (this.getMonth() == 10) { this.meuProp = 'Nov' }
    if (this.getMonth() == 11) { this.meuProp = 'Dez' }
}

var uma_data = new Date()
uma_data.meuMes()
var mes_nome = uma_data.meuProp
console.log(mes_nome)

