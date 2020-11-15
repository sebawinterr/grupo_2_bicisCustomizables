module.exports = function (sequelize, dataTypes) {
    let alias = "Cart";
    
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        orderNumber: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        idUser: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        total: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
    };
    
    let config = {
      tableName: "carts",
    };
    
    const Cart = sequelize.define(alias, cols, config);
    
    Cart.associate = function (models){
        Cart.hasMany(models.Item, {
            as: "items",
            foreignKey: "cartId",
          });
          Cart.belongsTo(models.User, {
            as: "user",
            foreignKey: "idUser",
          });
    
    }   
    
    return Cart;
}