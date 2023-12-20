let [n1, n2] = [3, 5]
console.log(n1 > 1 && n2 > 4, n1 <= 3 || n2 >= 6)
// && é o and do python 
// || é o or do python
// ! é o not do python, ou seja, voce nega o resultado, por exemplo:
let [n3, n4] =  [3, 3]
console.log(!(n3 == n4))
// EXEMPLO 
let dia_sol = true
let dinheiro = true
if(dia_sol == true && dinheiro == false){
    console.log("Voce não pode ir tomar sorvete!")
}else if(dia_sol == true && dinheiro == true){
    console.log("Voce pode ir tomar sorvete")
}