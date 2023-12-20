// FORMA LITERAL E SIMPLES

const obj = {} // TUDO QUE FOR ADICIONADO AQUI VAI SER TRATADO EM PAR CHAVE/VALOR.

// SEGUNDA FORMA É:

const obj1 = new Object // DIZENDO QUE MINHA VARIÁVEL OBJ1 PODE CRIAR UM OBJETO QUANDO INVOCADA.

// TERCEIRA FORMA É COM UMA FUNÇÃO CONSTRUTORA

function Produto(nome, preco, desconto){
    this.nome = nome // ATRIBUTO PÚBLICO E PODE SER ALTERADO FORA DA FUNÇÃO.
    this.ValorComDesconto = () => {
        return `Preço de ${nome} com desconto: ${(preco * (1 - desconto)).toFixed(2)}`
    }
}

const p1 = new Produto('Maçã', 1.50, 0.10)
const p2 = new Produto('Uva', 0.99, 0.20)
console.log(p1.ValorComDesconto()) // APLICANDO A FUNÇÃO DE CALCULAR O DESCONTO.
console.log(p2.ValorComDesconto())

// FUNÇÃO FACTORY OU FUNÇÃO CONSTRUTORA
function CriarFuncionario(nome, salario, faltas){
    return {
        nome,
        salario,
        faltas,
        SalarioComFaltas(){
            return `${((salario / 30) * (30 - faltas)).toFixed(2)}`
        }
    }
}
const f1 = CriarFuncionario('Luiz', 15500, 5)
const f2 = CriarFuncionario('Jonas', 11000, 6)
console.log(f1.SalarioComFaltas(), f2.SalarioComFaltas())


// OUTRA FORMA DE CRIAR UM OBJETO É COM O CREATE.

const Filho = Object.create(Object)
Filho.nome = 'Jonas'
Filho.Pai = 'Luiz'
console.log(Filho)  