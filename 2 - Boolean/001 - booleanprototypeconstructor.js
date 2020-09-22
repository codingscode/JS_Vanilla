// booleanprototypeconstructor -   Boolean.prototype.nome = valor
/*
The prototype constructor allows you to add new properties and methods to JavaScript booleans.

When constructing a property, ALL booleans will be given the property, and its value, as default.

When constructing a method, ALL booleans will have this method available.

Note: Boolean.prototype does not refer to a single boolean, but to the Boolean() object itself.

Note: Prototype is a global object constructor which is available for all JavaScript objects.

Mais:
Métodos
Boolean.prototype.toSource() 
Retorna a string contendo o codigo do objeto Boolean ;  pode-se usar esta string para criar um objeto equivalente. 
Sobreescreve o método Object.prototype.toSource().
Boolean.prototype.toString()
Retorna uma string com valor "true" ou "false" dependendo qual o valor do objeto. Sobreescreve o método 
Object.prototype.toString().
Boolean.prototype.valueOf()
Retorna o valor primitivo do objeto Boolean. Sobreescreve o método Object.prototype.valueOf().
*/

Boolean.prototype.minhaCor = function() {
    if(this.valueOf() == true) {
       return 'verde'
    }
    else {
       return 'vermelho'
    }
}
 
var cor = true
var verificar = cor.minhaCor()

console.log(verificar)









