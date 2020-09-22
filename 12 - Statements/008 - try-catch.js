/*

*/

let x = 10
let y = 6

try {
    if (x == y) {
        console.log('são iguais')
    }
    else {
        console.log(a + b)
    }
}
catch(erro) {
     console.log('*', erro.message)
     console.log('**', erro.name)
     console.log('***', erro.fileName)
     console.log('****', erro.lineNumber)
     console.log('*****', erro.columnNumber)
}

console.log('-------------------\n')

let k = 10
let t = 6

try {

    if (k == t) {
        console.log('são iguais')
    }
    else {
        console.log(a + b)
    }
}
catch(erro) {
     console.log(erro.name)
     console.log('há erro')
}

console.log('-------------------------')

try {
    throw new ReferenceError('Olá', 'arquivoQualquer.js', 10);
}
catch (e) {
    console.log(e instanceof ReferenceError); // true
    console.log(e.message);                   // "Olá"
    console.log(e.name);                      // "ReferenceError"
    console.log(e.fileName);                  // "arquivoQualquer.js"
    console.log(e.lineNumber);                // 10
    console.log(e.columnNumber);              // 0
    
}