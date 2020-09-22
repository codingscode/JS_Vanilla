//
try {
    console.log('try')
    if (confirm('Tem erro?')) BAD_CODE()
}
catch (erro) {
    console.log('catch')
}
finally {
    console.log('finally sempre executado')
}
