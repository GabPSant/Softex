import mysql from 'mysql';

/**
 * Configurações da conexão
 */

const conexao = mysql.createConnection({
    host: 'user',
    user: 'root',
    password: 'user',
    database: 'database'
});

/**
 * Tentativa de conexão
 */

conexao.connect(err =>{
    if(err){
        console.error('Erro ao iniciar a conexão: ', err);
        return;
    }

    console.log('Conexão bem sucedida');

    // Fechamento das conexões
    conexao.end(err =>{
        if(err){
            console.error('Erro ao fechar a conexão: ', err);
            return;
        }

        console.log('Conexão fechada');
    });
});
