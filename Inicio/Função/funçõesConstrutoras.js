function carro(carroVelocidademaxima = 200, delta = 5){

    // Aributo privado
    let velocidadeAtual = 0

    // Metodo publico
    this.acelerar = function (){
        if (velocidadeAtual + delta <= carroVelocidademaxima){
            velocidadeAtual += delta
        }else {
            velocidadeAtual = carroVelocidademaxima
        }
    }

    // Metodo público
    this.getVelocidadeAtual = function (){ // "this" é para que você poder invocar os métodos fora da função.
        return velocidadeAtual
    }
}

// EXECUTANDO

const celta = new carro(150, 8) // PARÂMETROS, VELOCIDADE MAXIMA E DELTA DE ACELERAÇÃO.
celta.acelerar()
console.log(celta.getVelocidadeAtual())

const civic = new carro(220, 11)
civic.acelerar()
civic.acelerar()
civic.acelerar()
civic.acelerar()
console.log('Velocidade em km/h:', civic.getVelocidadeAtual())