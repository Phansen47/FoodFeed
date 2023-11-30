const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const axios = require('axios');
const Meal = require('./models/Meal');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.post('/api/saveMeal', async (req, res) => {
    const { mealId } = req.body;
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

    try {
        const response = await axios.get(apiUrl);
        const mealData = response.data.meals[0];
        const ingredients = [];

        for (let i = 1; i <= 20; i++) {
            if (mealData[`strIngredient${i}`]) {
                ingredients.push({ ingredient: mealData[`strIngredient${i}`], measure: mealData[`strMeasure${i}`] });
            }
        }

        const newMeal = await Meal.create({
            meal_id: mealData.idMeal,
            title: mealData.strMeal,
            category: mealData.strCategory,
            area: mealData.strArea,
            instructions: mealData.strInstructions,
            image_url: mealData.strMealThumb,
            ingredients: JSON.stringify(ingredients)
        });

        res.json(newMeal);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
