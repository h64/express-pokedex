'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users_pokemons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  users_pokemons.init({
    userId: DataTypes.INTEGER,
    pokemonId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'users_pokemons',
  });
  return users_pokemons;
};