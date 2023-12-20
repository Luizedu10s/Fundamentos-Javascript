const avo = { nome: "Jonas", carro: 'celta 2009' }
const pai = { nome: 'Jose', __proto__: avo}
const filho = { nome: 'Gabriel', __proto__: pai}

console.log(filho.carro)
for(let key in filho){
    console.log(filho.hasOwnProperty(key))
}
