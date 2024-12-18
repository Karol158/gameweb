const { DataTypes } = require('sequelize');
const sequelize = require('../configurar/bd');

const Jogo = sequelize.define('jogos', {
  nome: {
  type: DataTypes.STRING,
    allowNull: false
  },
  genero: {
    type: DataTypes.STRING,
    allowNull: false
  },
  plataforma: {
    type: DataTypes.STRING,
    allowNull: false
  },
  preco: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

module.exports = Jogo;