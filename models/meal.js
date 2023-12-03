const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Meal extends Model {}

Meal.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        allowNull: true
    },
    area: {
        type: DataTypes.STRING,
        allowNull: true
    },
    instructions: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    ingredient1: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ingredient2: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ingredient3: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ingredient4: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ingredient5: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ingredient6: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ingredient7: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ingredient8: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ingredient9: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ingredient10: {
        type: DataTypes.STRING,
        allowNull: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        },
    },
    
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'meal',
});

module.exports = Meal;
