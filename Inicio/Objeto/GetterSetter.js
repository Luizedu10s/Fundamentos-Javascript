const objeto = {
    valor1: 1,
    get valor(){ return this.valor1++ },
    set valor(valor){ this.valor1 = valor }
}
console.log(objeto.valor, objeto.valor)