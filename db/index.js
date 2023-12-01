const connection = require("./connection");

// Creates a class for the cookbook database
class CookbookDB {
  constructor(connection) {
    this.connection = connection;
  }

  // Retrieve all meals
  getAllMeals() {
    return this.connection.promise().query("SELECT * FROM meals");
  }

  // Add a new meal
  addMeal(mealData) {
    return this.connection.promise().query("INSERT INTO meals SET ?", mealData);
  }

  // Retrieve a specific meal by ID
  getMealById(idMeal) {
    return this.connection.promise().query("SELECT * FROM meals WHERE idMeal = ?", [idMeal]);
  }

  // Retrieve all ingredients
  getAllIngredients() {
    return this.connection.promise().query("SELECT * FROM ingredients");
  }

  // Add a new ingredient
  addIngredient(strIngredient) {
    return this.connection.promise().query("INSERT INTO ingredients (strIngredient) VALUES (?)", [strIngredient]);
  }

  // Link ingredients to a meal
  addMealIngredients(mealId, ingredients) {
    const queries = ingredients.map(ingredient => {
      return this.connection.promise().query("INSERT INTO meal_ingredients (idMeal, idIngredient, strMeasure) VALUES (?, (SELECT idIngredient FROM ingredients WHERE strIngredient = ?), ?)", [mealId, ingredient.name, ingredient.measure]);
    });
    return Promise.all(queries);
  }

  // Update a meal
  updateMeal(idMeal, updatedData) {
    return this.connection.promise().query("UPDATE meals SET ? WHERE idMeal = ?", [updatedData, idMeal]);
  }

  // Delete a meal
  deleteMeal(idMeal) {
    return this.connection.promise().query("DELETE FROM meals WHERE idMeal = ?", [idMeal]);
  }

  // Search meals by name
  searchMealsByName(strMeal) {
    return this.connection.promise().query("SELECT * FROM meals WHERE strMeal LIKE ?", [`%${strMeal}%`]);
  }
}

module.exports = new CookbookDB(connection);
