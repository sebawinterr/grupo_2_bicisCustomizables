module.exports = (sequelize,DataTypes) =>{
    let alias = 'Article';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey : true,
            allowNull: false,
            autoIncrement: true
        },
        brand: DataTypes.STRING,
        model: DataTypes.STRING,
        id_style: DataTypes.INTEGER, //asociacion con styles
        description: DataTypes.STRING,
        techDescription: DataTypes.STRING,
        colors: DataTypes.STRING,
        size: DataTypes.STRING,
        shot: DataTypes.STRING,
        price: DataTypes.DECIMAL,
        discount: DataTypes.INTEGER,
        financing: DataTypes.BOOLEAN,
        financingSize: DataTypes.INTEGER,
        image: DataTypes.STRING,

    };
    let config = {
        tableName : 'articles',
    }
    const Article = sequelize.define(alias,cols,config);

    Article.associate = function(models) {
        Article.belongsTo(models.Style, {
            as: "styles",
            foreignKey: "id_style"

        });
    }




    return Article;
}