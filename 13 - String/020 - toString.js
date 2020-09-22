/*
string.toString()

The toString() method returns the value of a String object.

*/

const valor_1 = 'isto é uma frase'
const valor_2 = 18
const valor_3 = false

const para_str = valor_1.toString()
const para_str2 = valor_2.toString()
const para_str3 = valor_2.toString(2)  // de decimal para binario
const para_str4 = parseInt(valor_2.toString(2)) // em converte string para numero-inteiro(default: decimal)
const para_str5 = valor_3.toString()

console.log(para_str)
console.log('2:', para_str2, typeof para_str2)
console.log('3:', para_str3, typeof para_str3)
console.log('4:', para_str4, typeof para_str4)
console.log('5:', para_str5, typeof para_str5)
console.log('-------------------\n')

const valor_decimal1 = 3
const valor_decimal2 = 12
const valor_decimal3 = 8

const valor_binario1 = 100
const valor_binario2 = 110
const valor_binario3 = 1110
const valor_binario4 = 10011

const deci_para_bina1 = Number(valor_decimal1.toString(2))
const deci_para_bina2 = Number(valor_decimal2.toString(2))
const deci_para_bina3 = Number(valor_decimal3.toString(2))

const bina_para_deci1 = parseInt(valor_binario1, 2)
const bina_para_deci2 = parseInt(valor_binario2, 2)
const bina_para_deci3 = parseInt(valor_binario3, 2)
const bina_para_deci4 = parseInt(valor_binario4, 2)

console.log('de decimal para binário:')
console.log(`${valor_decimal1} ->`, deci_para_bina1, typeof deci_para_bina1)
console.log(`${valor_decimal2} ->`, deci_para_bina2, typeof deci_para_bina2)
console.log(`${valor_decimal3} ->`, deci_para_bina3, typeof deci_para_bina3)
console.log('')

console.log('de binário para decimal:')
console.log(`${valor_binario1} ->`, bina_para_deci1, typeof bina_para_deci1)
console.log(`${valor_binario2} ->`, bina_para_deci2, typeof bina_para_deci2)
console.log(`${valor_binario3} ->`, bina_para_deci3, typeof bina_para_deci3)
console.log(`${valor_binario4} ->`, bina_para_deci4, typeof bina_para_deci4)
