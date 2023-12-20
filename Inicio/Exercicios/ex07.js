// tipos de dados

const nome = "Luiz";
const idade = 18;
const homem = true
const altura = 1.72;

// imprimindo os tipos dos dados que estão dentro das variáveis

console.log(typeof nome)
console.log(typeof idade)
console.log(typeof homem)
console.log(typeof altura)

// outro exemplo 

const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.25
const avaliacao2 = 9.50

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) // FUNÇÃO TOFIXED, FUNÇÃO PARA FORMATAR CASAS DECIMAIS.
console.log(media.toString(2)) // PARA CONVERTER PARA STRING EM BINÁRIO.
console.log(typeof media)
