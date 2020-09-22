//
/*



ar-SA Arabic (Saudi Arabia)
bn-BD Bangla (Bangladesh)
bn-IN Bangla (India)
cs-CZ Czech (Czech Republic)
da-DK Danish (Denmark)
de-AT Austrian German
de-CH "Swiss" German
de-DE Standard German (as spoken in Germany)
el-GR Modern Greek
en-AU Australian English
en-CA Canadian English
en-GB British English
en-IE Irish English
en-IN Indian English
en-NZ New Zealand English
en-US US English
en-ZA English (South Africa)
es-AR Argentine Spanish
es-CL Chilean Spanish
es-CO Colombian Spanish
es-ES Castilian Spanish (as spoken in Central-Northern Spain)
es-MX Mexican Spanish
es-US American Spanish
fi-FI Finnish (Finland)
fr-BE Belgian French
fr-CA Canadian French
fr-CH "Swiss" French
fr-FR Standard French (especially in France)
he-IL Hebrew (Israel)
hi-IN Hindi (India)
hu-HU Hungarian (Hungary)
id-ID Indonesian (Indonesia)
it-CH "Swiss" Italian
it-IT Standard Italian (as spoken in Italy)
jp-JP Japanese (Japan)
ko-KR Korean (Republic of Korea)
nl-BE Belgian Dutch
nl-NL Standard Dutch (as spoken in The Netherlands)
no-NO Norwegian (Norway)
pl-PL Polish (Poland)
pt-BR Brazilian Portuguese
pt-PT European Portuguese (as written and spoken in Portugal)
ro-RO Romanian (Romania)
ru-RU Russian (Russian Federation)
sk-SK Slovak (Slovakia)
sv-SE Swedish (Sweden)
ta-IN Indian Tamil
ta-LK Sri Lankan Tamil
th-TH Thai (Thailand)
tr-TR Turkish (Turkey)
zh-CN Mainland China, simplified characters
zh-HK Hong Kong, traditional characters
zh-TW Taiwan, traditional characters
*/

var n = new Number(1000000)
var n2 = new Number(142.67)

var filan = n.toLocaleString("fi-FI")
var brasil = n.toLocaleString("pt-BR")
var eua = n.toLocaleString("en-US")
var fran = n.toLocaleString("fr-FR")
var esp = n.toLocaleString("es-ES")

var filan2 = n2.toLocaleString("fi-FI")
var brasil2 = n2.toLocaleString("pt-BR")
var eua2 = n2.toLocaleString("en-US")
var fran2 = n2.toLocaleString("fr-FR")
var esp2 = n2.toLocaleString("es-ES")


console.log(`filan ${filan}`)
console.log(`brasil ${brasil}`)
console.log(`eua ${eua}`)
console.log(`fran ${fran}`)
console.log(`esp ${esp}`)
console.log('--------------------------')

console.log(`filan2 ${filan2}`)
console.log(`brasil2 ${brasil2}`)
console.log(`eua2 ${eua2}`)
console.log(`fran2 ${fran2}`)
console.log(`esp2 ${esp2}`)
