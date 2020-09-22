// copyWithin() - 
/* array.copyWithin(target, start, end)
    alvo - Required. The index position to copy the elements to
    inicio - Optional. The index position to start copying elements from  (default is 0)
    fim - Optional. The index position to stop copying elements from (default is array.length)       
*/

var frutas = ['laranja', 'banana', 'maçã', 'uva', 'manga', 
             'caranbola', 'goiaba', 'graviola', 'caju', 'tanja',
               'melancia', 'melão', 'amendoim', 'pessego']
frutas.copyWithin(5, 2)  //copyWithin(n, x) n=n 1ºs para repetir, x=x 1ºs exclusos de n

console.log(frutas)
