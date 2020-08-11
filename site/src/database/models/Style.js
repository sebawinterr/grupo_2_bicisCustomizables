module.exports = (sequelize,DataTypes) =>{
    let alias = 'Style';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey : true,
            allowNull: false,
            autoIncrement: true
        },
        name: DataTypes.STRING,
    };
    let config = {
        tableName : 'styles',
    }

    const Style = sequelize.define(alias,cols,config);

    /*Style.associate = function(models) {
        Style.hasMany(models.Article, {
            as: "articles",
            foreignKey: "style_id"

        });
    }*/

    return Style;
}