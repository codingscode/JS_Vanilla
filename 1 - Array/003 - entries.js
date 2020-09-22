//entries() -  Create an Array Iterator object, and create a loop that iterates each key/value pair:

var frutas = ['laranja', 'banana', 'maçã', 'uva', 'manga', 
             'caranbola', 'goiaba', 'graviola', 'caju', 'tanja',
               'melancia', 'melão', 'amendoim', 'pessego']

var f = frutas.entries()  

console.log(f)
console.log(f[0])

for (x of f) {
   console.log(x)
}

