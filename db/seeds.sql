USE recipe_db;

INSERT INTO meals (idMeal, strMeal, strDrinkAlternate, strCategory, strArea, strInstructions, strMealThumb, strTags, strYoutube)
VALUES
('52771', 'Spicy Arrabiata Penne', NULL, 'Vegetarian', 'Italian', 'Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.', 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg', 'Pasta,Curry', 'https://www.youtube.com/watch?v=1IszT_guI08');

INSERT INTO ingredients (strIngredient)
VALUES
('penne rigate'),
('olive oil'),
('garlic'),
('chopped tomatoes'),
('red chile flakes'),
('italian seasoning'),
('basil'),
('Parmigiano-Reggiano');

INSERT INTO meal_ingredients (idMeal, idIngredient, strMeasure)
VALUES
('52771', (SELECT idIngredient FROM ingredients WHERE strIngredient = 'penne rigate'), '1 pound'),
('52771', (SELECT idIngredient FROM ingredients WHERE strIngredient = 'olive oil'), '1/4 cup'),
('52771', (SELECT idIngredient FROM ingredients WHERE strIngredient = 'garlic'), '3 cloves'),
('52771', (SELECT idIngredient FROM ingredients WHERE strIngredient = 'chopped tomatoes'), '1 tin'),
('52771', (SELECT idIngredient FROM ingredients WHERE strIngredient = 'red chile flakes'), '1/2 teaspoon'),
('52771', (SELECT idIngredient FROM ingredients WHERE strIngredient = 'italian seasoning'), '1/2 teaspoon'),
('52771', (SELECT idIngredient FROM ingredients WHERE strIngredient = 'basil'), '6 leaves'),
('52771', (SELECT idIngredient FROM ingredients WHERE strIngredient = 'Parmigiano-Reggiano'), 'sprinkling');
