module.exports = (sequelize,DataTypes) =>{
    let alias = 'Neighbourhood';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey : true,
            allowNull: false,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        zipCode: DataTypes.INTEGER,
        country: DataTypes.STRING, 
        province: DataTypes.STRING,
    };
    let config = {
        tableName : 'neighbourhouds',
    }
    const Neighbourhood = sequelize.define(alias,cols,config);

    Neighbourhood.associate = function(models) {
        Neighbourhood.hasMany(models.Address, {
            as: "addresses",
            foreignKey: "idNeighbourhood"
        });
    }

    return Neighbourhood;
}