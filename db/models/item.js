const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Order, User }) {
      this.hasMany(Order, { foreignKey: 'itemId' });
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Item.init({
    title: DataTypes.STRING,
    img: DataTypes.STRING,
    address: DataTypes.STRING,
    price: DataTypes.INTEGER,
    sale: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};
