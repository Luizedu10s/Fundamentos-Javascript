const situacao_aluno = nota => nota >= 7 ? "Aprovado":"Reprovado" // MODO RESUMIDO DE UM IF/ELSE-IF/ELSE
console.log(situacao_aluno(9.9))

/* A estrutura de um operador ternário é compreendida da seguinte forma:

 condição? valor se for verdareiro : valor se for falso

Portanto, inicialmente temos um teste 
(podemos adicionar um teste qualquer), ou seja,qualquer teste devolve um valor booleano, 
então, definimos o primeiro parâmetro que é justamente o valor que será retornado caso o teste 
for verdadeiro e o segundo que será retornado caso for falso! */