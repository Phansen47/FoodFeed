# FoodFeed

## Table of Contents

* [Technologies](#technologies)
* [Description](#description)
* [User story](#user-story)
* [Installation](#installation)
* [Usage](#usage)
* [Screenshots](#screenshots)
* [License](#license)

## Technologies
![Technologies](https://img.shields.io/badge/-Git-F05032?logo=Git&logoColor=white)
![Technologies](https://img.shields.io/badge/-JavaScript-007396?logo=JavaScript&logoColor=white)
![Technologies](https://img.shields.io/badge/-Node.js-339933?logo=Node.js&logoColor=white)
![Technologies](https://img.shields.io/badge/-npm-CB3837?logo=npm&logoColor=white)
![Technologies](https://img.shields.io/badge/-MySQL-4479A1?logo=MySQL&logoColor=white)
[![Sequelize Badge](https://img.shields.io/badge/Sequelize-52B0E7?logo=sequelize&logoColor=fff&style=flat)](https://sequelize.org/docs/v6/)
[![Insomnia Badge](https://img.shields.io/badge/Insomnia-4000BF?logo=insomnia&logoColor=fff&style=flat)](https://insomnia.rest/)
[![.ENV Badge](https://img.shields.io/badge/.ENV-ECD53F?logo=dotenv&logoColor=000&style=flat)](https://www.npmjs.com/package/dotenv)


## Description
We are creating an app that will allow people to create and ssave recipes for food and drinks. It will include private logins and the ability to create a profile where the user can save and view their recipes.

## Installation

Link to deployed application: https://enigmatic-hollows-51581-85d21f4c37a7.herokuapp.com/login

Log in using the example account with email jordan99@msn.com and password password12345. Once logged in, the user can view the recipes associated with their account and add new recipes. 

## User Story
As a chef, I want to easily find and save recipes, so that I don't have to spend a lot of time looking for recipes.

## Usage
This app can be used as a virtual cookbook where users can save recipes and view them later on when they'd like to cook them. 

## Screenshots

Login Page: 
![login](./public/img/login.png) 

My Recipes (sample login): 
![my recipes](./public/img/myrecipes.png)

View Recipe:
![view](./public/img/view.png) 

Add Recipe:
![login](./public/img/add.png) 

## Technologies Used & Requirements Met

- Node.js and Express.js used for implementation of a RESTful API
- Handlebars.js for templating - see views folder
- MYSQL and Sequelize for database and ORM - see config, models, db folders
- GET and POST routes implemented in files in the controllers folder
- Includes authentication allowing users to login and saves sessions using Express Sessions and cookies
- .env file to protect API keys and sensitive information
- Repo is set up in MVC format
- We attempted to use Sass but ran out of time to properly implement it

## Credits

We used the code from module 14 activity 28 from our bootcamp class to start and customized it to fit our needs.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  


[def]: #user_story