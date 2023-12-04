const sequelize = require('../config/connection');
const { User } = require('../models');
const { Meal } = require('../models');

const userData = require('./userData.json');
const mealData = require('./mealData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  //seed database with mealdata
  for (const meal of mealData) {
    await Meal.create({
      ...meal,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
