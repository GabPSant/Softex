function buscaLinear(lista, elementoBuscado){
    if(!Array.isArray(lista)) console.log("Só será aceito um array");
    else{
        let posicao = -1;
        for(i = 0; i<lista.length; i++){
            if(lista[i] === elementoBuscado){
                posicao = i;
                break;
            }
        }
        console.log((posicao !== -1)? `O elemento ${elementoBuscado} está na posição ${i}`:
        `O elemento ${elementoBuscado} não foi encontrado na lista`);
    }
}
buscaLinear([15,8,10,25,12,30,5,20,18,7], 20);

function buscaBinaria(lista){// Ainda em desenvolvimento

}