const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Meal extends Model {}

Meal.init({
    meal_id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    category: DataTypes.STRING,
    area: DataTypes.STRING,
    instructions: DataTypes.TEXT,
    image_url: DataTypes.STRING,
    ingredients: DataTypes.TEXT // JSON string
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'meal',
});

module.exports = Meal;
