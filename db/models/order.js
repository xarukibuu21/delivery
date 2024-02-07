const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Item }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Item, { foreignKey: 'itemId' });
    }
  }
  Order.init({
    userId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Order',
  });

  return Order;
};
