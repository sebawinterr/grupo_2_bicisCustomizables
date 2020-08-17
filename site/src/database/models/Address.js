module.exports = (sequelize,DataTypes) =>{
    let alias = 'Address';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey : true,
            allowNull: false,
            autoIncrement: true
        },
        streetName: DataTypes.STRING,
        additionalNumbers: DataTypes.STRING,
        neighbourhood: DataTypes.STRING,
        zipCode: DataTypes.INTEGER,
        province: DataTypes.STRING,
        

    };
    let config = {
        tableName : 'addresses',
    }
    const Address = sequelize.define(alias,cols,config);

    Address.associate = function(models) {
        Address.hasMany(models.User, {
            as: "users",
            foreignKey: "idAddress"

        });
    }
    return Address;
}