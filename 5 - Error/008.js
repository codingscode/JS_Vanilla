let numero = 4  //  8, 10, 20, 34, 40
let diferenca, resultado


function fib(n) {
   if (n < 0 || Math.trunc(n) != n) {  // Math.trunc só considera a parte inteira
      throw new Error('Deve ser não negativo, e também um inteiro')
   }
   return n <= 1 ? n : fib(n-1) + fib(n - 2)
}

let inicio = Date.now()

try {
   //console.log('resultado', fib(numero))
   resultado = fib(numero)
}
catch (erro) {
   resultado = 0
   console.log(erro.message)
}
finally {
    diferenca = Date.now() - inicio
}

console.log(resultado || 'ocorreu um erro')
console.log(`a execução levou ${diferenca} milisegundos`)

// https://javascript.info/try-catch
// You can check by running the code with entering 
