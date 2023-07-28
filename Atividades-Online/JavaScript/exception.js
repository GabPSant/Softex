function idade(){
    const nomeCompleto = prompt("Digite o seu nome completo");
    while(true){
        try{
            const anoNascimento = parseInt(prompt("Digite o ano em que você nasceu"));
            if(anoNascimento<1923 || anoNascimento>2023){
                throw new Error(alert("É impossível você ter nascido nesse ano"));
            }
            alert(`${nomeCompleto}, ${2023-anoNascimento} anos em 2023`);
            break;
        }
        catch(error){
            alert("Essa resposta não é valida");
        }
    }
    alert("Obrigado por responder!");
}
idade();