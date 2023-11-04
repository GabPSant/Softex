// Módelo do produto
import { Sequelize, DataTypes } from "sequelize"

/**
 * 
 * @param {Sequelize} sequelize 
 * @param {DataTypes} DataTypes 
 */
module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define('Produto', {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },

        preco: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },

        descricao: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    });

    return Produto;
}