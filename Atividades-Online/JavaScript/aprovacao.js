// Lambda para calcular a media das notas
let media = (x,y) => (x+y)/2;

// Função para fazer o processo
function aprovacao(){
    const nota1 = Number(prompt("Digite a primeira nota"));
    const nota2 = Number(prompt("Digite a segunda nota"));
    if(media(nota1,nota2)<4){
        alert(`Aluno reprovado (media: ${media(nota1,nota2).toFixed(2)})`);
    }
    else if(media(nota1,nota2)<7){
        alert(`Aluno vai para recuperação (media: ${media(nota1,nota2).toFixed(2)})`);
    }
    else{ alert(`Aluno aprovado (media: ${media(nota1,nota2).toFixed(2)})`);}
} 
aprovacao();
// Funciona no console web, mas não no node