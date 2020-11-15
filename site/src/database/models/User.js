module.exports = (sequelize,DataTypes) =>{
    let alias = 'User';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey : true,
            allowNull: false,
            autoIncrement: true
        },
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        dni: DataTypes.INTEGER,
        phoneNumber: DataTypes.INTEGER,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        category: DataTypes.INTEGER,
        image: DataTypes.STRING,
        idAddress: DataTypes.INTEGER, // asociacion con addresses

    };
    let config = {
        tableName : 'users',
    }
    const User = sequelize.define(alias,cols,config);

    User.associate = function(models) {
        User.belongsTo(models.Address, {
            as: "addresses",
            foreignKey: "idAddress"

        });

        User.hasMany(models.Item, {
            foreignKey: "idUser",
            as: "items",
          });
      
          // associate with carts
          User.hasMany(models.Cart, {
            foreignKey: "idUser",
            as: "carts",
          });

    }

    return User;
}