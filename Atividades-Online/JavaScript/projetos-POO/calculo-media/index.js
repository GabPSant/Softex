function calculoMedia(){
    alert("Cálculo da media de três notas");
    const notas = [];

    for(let i = 0; i<3; i++){
        const nota = Number(prompt(`Nota ${i+1} (valor entre 0 e 10):`));
        if(Number.isNaN(nota) || (nota<0 || nota>10)){
            alert("Esse valor não é válido");
            i--;
        }
        else{
            notas.push(nota);
        }
    }

    let media = 0;
    notas.forEach(x => media+=x);// Soma de todos os valores da média
    media /= 3;// Divisão da média

    console.log(`Notas: ${notas}`);
    console.log(`Media: ${media}`);
    alert(`Media: ${media.toFixed(2)}`);
}
calculoMedia();