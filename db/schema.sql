DROP DATABASE IF EXISTS recipe_db;

CREATE DATABASE IF NOT EXISTS recipe_db;

USE recipe_db;

-- Create 'meals' table
CREATE TABLE meals (
    idMeal INT PRIMARY KEY,
    strMeal VARCHAR(255),
    strDrinkAlternate VARCHAR(255),
    strCategory VARCHAR(100),
    strArea VARCHAR(100),
    strInstructions TEXT,
    strMealThumb VARCHAR(255),
    strTags VARCHAR(255),
    strYoutube VARCHAR(255)
);

-- Create 'ingredients' table
CREATE TABLE ingredients (
    idIngredient INT AUTO_INCREMENT PRIMARY KEY,
    strIngredient VARCHAR(100)
);

-- Create 'meal_ingredients' table
CREATE TABLE meal_ingredients (
    idMealIngredient INT AUTO_INCREMENT PRIMARY KEY,
    idMeal INT,
    idIngredient INT,
    strMeasure VARCHAR(100),
    FOREIGN KEY (idMeal) REFERENCES meals(idMeal),
    FOREIGN KEY (idIngredient) REFERENCES ingredients(idIngredient)
);
