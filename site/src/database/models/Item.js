module.exports = function (sequelize, dataTypes) {
    let alias = "Item";
    
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        
        salePrice: {
            type: dataTypes.DECIMAL,
            allowNull: false
        },
        
        subtotal: {
            type: dataTypes.DECIMAL,
            allowNull: false
        },

        state: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        
        idArticle: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        idUser: {
            type: dataTypes.INTEGER,
            allowNull: false
        },

        cartId: {
            type: dataTypes.INTEGER,
        },

    };
    

    //Esto lo coloco en comentarios ya que poseo mi base de datos sequelizada
    let config = {
        tableName: "items",
    };
    
    const Item = sequelize.define(alias, cols, config);
    
    Item.associate = function (models){
        Item.belongsTo(models.Cart, {
            as: "cart",
            foreignKey: "cartId",
          });

          Item.belongsTo(models.User, {
            as: "user",
            foreignKey: "idUser",
          });
        
          Item.belongsTo(models.Article, {
            as: "article",
            foreignKey: "idArticle",
          });
    
        
    }
    
    return Item;
}