//
function funcao() {
    try {
        return 1
    }
    catch (erro) {
        //
    }
    finally {
        console.log('finally')
    }
}

console.log(funcao())  // first works alert from finally, and then this one
