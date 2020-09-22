// https://javascript.info/type-conversions

// Conversões


// conversão string
let valor = true
console.log(valor, typeof valor)

let valor2 = String(valor)
console.log(valor2, typeof valor2)
console.log('-------------------')

// conversão numérica
valor3 = '8'/'2'
console.log(valor3, typeof valor3)

let uma_string1 = '632'
console.log(uma_string1, typeof uma_string1)

let numero1 = Number(uma_string1)
console.log(numero1, typeof numero1)

let idade1 = Number('uma string arbitraria invés de numero')
console.log(idade1)

console.log(Number("   123   ")) 
console.log(Number("123z"))     // NaN (error reading a number at "z")
console.log(Number(true))       
console.log(Number(false))      
console.log(Number(null))      
console.log(Number(undefined))      
console.log('---------------')       

//  conversão booleana
console.log(Boolean(1))   
console.log(Boolean(0))   
console.log(Boolean('bom dia'))   
console.log(Boolean(''))   
console.log(Boolean(null))   
console.log(Boolean(undefined))   
console.log(Boolean(NaN)) 
















