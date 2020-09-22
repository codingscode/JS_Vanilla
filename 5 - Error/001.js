/*
new Error(message, fileName, lineNumber)

*/

try {
   console.log(a+b)
   throw new Error('Há erro!')
}
catch (e) {
   console.log(e.name + ' : ' + e.message)
}
