import express from "express";

const servidor = express();

/*
    a função get permite pegar uma rota especifica do site (ao colocar '/' definimos que pode ser qualquer rota) e definir
    reações do servidor em relação a situação.
    req: representa request (pedido) que significa input do usuário ao estar nessa rota
    res: representa response (resposta) que significa output do servidor para a rota especifíca
*/

servidor.get('/', (req, res) =>{
    res.send('<h1>Nosso primeiro Servidor!</h1>');
})

servidor.get('/json', (req, res) =>{
    res.json({
        titulo: "Nosso primeiro parametro",
        online: true
    })
})
/*
    O número representa a rota de acesso do servidor que será usada
*/
servidor.listen(3000, () =>{
    console.log("Servidor iniciado");
});