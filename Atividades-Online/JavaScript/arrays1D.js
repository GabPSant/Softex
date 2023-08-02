// Testes com arrays
const pessoas = ["Gabriel","Samuel","Rafael","Ariel","Uriel","Miguel","Azazel","Cassiel","Castiel","Lucifer"];
const idades = [28,79,45,63,28,94,19,54,82,26];
const coresFavoritas = ["Vermelho","Azul","Roxo","Marrom","Verde","Amarelo","Laranja","Preto","Cinza","Branco"];
const lista = Array(10);

for(i = 0; i<lista.length;i++){ lista.fill({nome:pessoas[i],idade: idades[i], cor: coresFavoritas[i]},i,i+1);}
console.log("lista antes das mudanças\n",pessoas, idades, coresFavoritas, lista);

coresFavoritas.splice(parseInt(Math.random()*9),1,"Lilás"); // Troca o nome de uma cor favorita em um posiçao aleatória (entre 0 e 9)
idades.splice(parseInt(Math.random()*9),1,34); // Troca o nome de uma cor favorita em um posiçao aleatória (entre 0 e 9)

for(i = 0; i<lista.length;i++){ lista.fill({nome:pessoas[i],idade: idades[i], cor: coresFavoritas[i]},i,i+1);}
console.log("Listas pós mudanças\n", pessoas, idades, coresFavoritas, lista);