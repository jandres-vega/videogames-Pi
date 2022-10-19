const {DataTypes, Model} = require('sequelize');

const schemaGenders = {
    name_genders: {
        type: DataTypes.STRING,
        allowNull: false
    }
}

class Genders extends Model{
    static associated(models) {
        this.belongsToMany(models.VideoGames, {through: 'VideoGenders', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
    }
    static config(sequelize) {
        return {
            sequelize
        }
    }
}

module.exports = {
    schemaGenders,
    Genders
}