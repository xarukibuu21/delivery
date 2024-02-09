const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Order, Item }) {
      this.hasMany(Order, { foreignKey: 'userId' });
      this.hasMany(Item, { foreignKey: 'userId' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    isDeliver: DataTypes.BOOLEAN,
    address: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
