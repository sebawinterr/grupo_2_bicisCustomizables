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
        //idNeighbourhood: DataTypes.INTEGER, // asociacion con neighbourhood

    };
    let config = {
        tableName : 'addresses',
    }
    const Address = sequelize.define(alias,cols,config);

    /*Address.associate = function(models) {
        Address.hasMany(models.User, {
            as: "users",
            foreignKey: "idAddress"

        });
    }*/

    Address.associate = function(models) {
        Address.belongsTo(models.Neighbourhood, {
            as: "neighbourhoods",
            foreignKey: "idNeighbourhood"

        });
    }





    return Address;
}