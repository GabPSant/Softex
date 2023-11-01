import 'sequelize'

module.exports = {
    development: {
        username: 'root',// Nome do usuário
        password: 'root',// Senha
        database: 'produto',// Nome da base de dados
        host: 'localhost',// Rota para usar o banco de dados
        dialect: 'mysql'// Tipo de banco de dados
    }
}