// PRÓTOTIPOS
/* 
    TODO NOVO OBJETO QUE TIVER COMO PROTÓTIPO UM OBJETO ANTERIOR A ELE, PODERÁ REUTILIZAR FUNÇÕES OU, 
    DADOS ESPECÍFICOS DELE.
*/
const avo = { carro: 'Celta 2009' }
const pai = { __proto__: avo, bicicleta: 'Bike' } 
/*  CASO O PAI NÃO TENHA CARRO, CASO O AVÔ TENHA, 
    ELE RETORNARÁ O CARRO DO AVÓ. 
    POIS É HERANÇA.
*/
const filho = { __proto__: pai }

console.log(pai.carro) // ELE NÃO TEM O CARRO, MAS O PAI DELE TEM, LOGO É HERANÇA.
console.log(filho.bicicleta)


// OBJETO MAIS COMPLEXO 

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo: 'V40',
    velMax: 324
}
Object.setPrototypeOf(ferrari, carro) // DEFININDO UM PROTÓTIPO PADRÃO NO CONCEITO DE HERANÇA.

const volvo = {
    modelo: 'F45',
    status(){
        return `${this.modelo} ${super.status()}`
    }
}
Object.setPrototypeOf(volvo, carro) // DEFININDO UM PROTÓTIPO PADRÃO NO CONCEITO DE HERANÇA.

volvo.acelerarMais(100)
console.log(volvo.status()) // MOSTRANDO A VELOCIDADE ATUAL DO VOLVO E SUA VELOCIDADE MÁXIMA.

ferrari.acelerarMais(300)
console.log(ferrari.status())