// decodeURIComponent() -  decodeURIComponent(uri)
/*

The decodeURIComponent() function decodes a URI component.

Tip: Use the encodeURIComponent() function to encode a URI component.

*/

var uri = 'https://www.theguardian.com/world/2020/mar/18/japanese-flu-drug-clearly-effective-in-treating-coronavirus-says-china'
console.log(uri)

var uri_encodar = encodeURIComponent(uri)
console.log(uri_encodar)

var uri_decodar = decodeURIComponent(uri_encodar)
console.log(uri_decodar)
