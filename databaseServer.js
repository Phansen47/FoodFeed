const inquirer = require("inquirer");
const db = require("./db");

// User input for main menu
async function mainMenu() {
  const answer = await inquirer.prompt([
    {
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View all meals",
        "Add a new meal",
        "Find a meal by ID",
        "View all ingredients",
        "Add a new ingredient",
        "Exit",
      ],
    },
  ]);

  // Responses to user input
  try {
    switch (answer.action) {
      case "View all meals":
        await viewAllMeals();
        break;
      case "Add a new meal":
        await promptForNewMeal();
        break;
      case "Find a meal by ID":
        await promptForMealById();
        break;
      case "View all ingredients":
        await viewAllIngredients();
        break;
      case "Add a new ingredient":
        await promptForNewIngredient();
        break;
      case "Exit":
        console.log("Exiting application");
        db.connection.end();
        return;
      default:
        console.log(`Invalid action: ${answer.action}`);
        break;
    }
  } catch (error) {
    console.error("Error:", error);
  }
  mainMenu()
}

// View all meals
async function viewAllMeals() {
  const [meals] = await db.getAllMeals();
  console.table(meals);
}

// Add a new meal
async function promptForNewMeal() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "idMeal",
      message: "Enter a unique ID for the new meal:",
    },
    {
      type: "input",
      name: "strMeal",
      message: "Enter the name of the new meal:",
    },
    {
      type: "input",
      name: "strDrinkAlternate",
      message: "Enter an alternate drink (if any, else press Enter):",
      default: null,
    },
    {
      type: "input",
      name: "strCategory",
      message: "Enter the category of the meal (e.g., Vegetarian, Non-Vegetarian):",
    },
    {
      type: "input",
      name: "strArea",
      message: "Enter the cuisine region of the meal (e.g., Italian, Mexican):",
    },
    {
      type: "input",
      name: "strInstructions",
      message: "Enter the cooking instructions:",
    },
    {
      type: "input",
      name: "strMealThumb",
      message: "Enter the URL for the meal's image:",
    },
    {
      type: "input",
      name: "strTags",
      message: "Enter tags for the meal (comma-separated):",
    },
    {
      type: "input",
      name: "strYoutube",
      message: "Enter the YouTube link for the meal's recipe (if any):",
    },
  ]);

  await db.addMeal(answers);
  console.log(`Added new meal: ${answers.strMeal}`);
}

// Find a meal by ID
async function promptForMealById() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "idMeal",
      message: "Enter the ID of the meal:",
    },
  ]);

  const [meal] = await db.getMealById(answers.idMeal);
  console.table(meal);
}

// View all ingredients
async function viewAllIngredients() {
  const [ingredients] = await db.getAllIngredients();
  console.table(ingredients);
}

// Add a new ingredient
async function promptForNewIngredient() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "strIngredient",
      message: "Enter the name of the new ingredient:",
    },
  ]);

  await db.addIngredient(answers.strIngredient);
  console.log(`Added new ingredient: ${answers.strIngredient}`);
}

// Runs the main menu at start
mainMenu();
