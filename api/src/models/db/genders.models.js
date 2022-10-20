const {DataTypes, Model} = require('sequelize');

const schemaGenders = {
    name_genders: {
        type: DataTypes.STRING,
        allowNull: false
    }
}

class Genres extends Model{
    static associated(models) {
        this.belongsToMany(models.VideoGames,
            { as: 'genres', through: 'VideoGenders', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
    }
    static config(sequelize) {
        return {
            sequelize
        }
    }
}

module.exports = {
    schemaGenders,
    Genres
}