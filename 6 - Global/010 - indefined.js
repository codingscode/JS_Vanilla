/*
 undefined - 
 
 The undefined property indicates that a variable has not been assigned a value, or not declared at all.

 */

var definido_ou_declarado = 6
var naodefinido_ou_naodeclarado

var k = naodefinido_ou_naodeclarado

try {
    if (typeof k === 'undefined') {
        console.log(`${k.keys()} não é definido`)
     }
     else {
        console.log(`${k} é definido`)
     }
}

catch(e) {
    console.log(`a variavel é ${e.getmessage}`)
}
