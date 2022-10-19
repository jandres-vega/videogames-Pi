const {DataTypes, Model} = require('sequelize');

const schemaVideoGame = {
    id:{
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    name_game: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    image: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    release_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}

class VideoGames extends Model{
    static associated(models) {
        this.belongsToMany(models.Genders, {through: 'VideoGenders', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
        this.belongsToMany(models.Platforms, {through: 'VideoPlatforms', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
    }
    static config(sequelize) {
        return {
            sequelize
        }
    }
}

module.exports = {
    VideoGames,
    schemaVideoGame
}