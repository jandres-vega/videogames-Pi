const {DataTypes, Model} = require('sequelize');

const schemaPlatform = {
    name_platform: {
        type: DataTypes.STRING,
        allowNull: false
    }
}
class Platforms extends Model{
    static associated(models) {
        this.belongsToMany(models.VideoGames, {through: 'VideoPlatforms', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
    }
    static config(sequelize) {
        return {
            sequelize
        }
    }
}

module.exports = {
    schemaPlatform,
    Platforms
}