/*
string.toLocaleLowerCase()

The toLocaleLowerCase() method converts a string to lowercase letters, according to the host's current locale.
The locale is based on the language settings of the browser.
Generally, this method returns the same result as the toLowerCase() method. However, for some locales, where language
 conflict with the regular Unicode case mappings occurs (such as Turkish), the results may vary.
Note: The toLocaleLowerCase() method does not change the original string.
Tip: Use the toLocaleUpperCase() method to convert a string to uppercase letters, according to the host's current locale.

*/

// convertendo toda uma string para minuscula
const uma_string_1 = 'ESTA FRASE parte DELA é MAIUSCULA'

const tudo_minusculo = uma_string_1.toLocaleLowerCase()


console.log(`tudo minusculo: ${tudo_minusculo}`)
console.log('-----------------------------------\n')

/*
string.toLocaleUpperCase()

The toLocaleUpperCase() method converts a string to uppercase letters, according to the host's current locale.
The locale is based on the language settings of the browser.
Generally, this method returns the same result as the toUpperCase() method. However, for some locales, where language conflict with the regular Unicode case mappings occurs (such as Turkish), the results may vary.
Note: The toLocaleUpperCase() method does not change the original string.
Tip: Use the toLocaleLowerCase() method to convert a string to lowercase letters, according to the host's current locale.

*/

const tudo_maiusculo_1 = uma_string_1.toLocaleUpperCase()

console.log(`tudo maiusculo: ${tudo_maiusculo_1}`)
