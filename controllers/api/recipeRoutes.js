const router = require('express').Router();
const { Recipe } = require('../../models');
const withAuth = require('../../utils/auth');

//get all saved recipes
router.get('/', async (req, res)=>{
  try{
    const recipeData = await Recipe.findAll({
      where:{
        user_id: req.session.user_id
      }
    });
    //serialize data
    const recipes = userData.map((project) => project.get({ plain: true }));
    //render user recipes on home page
    res.render('homepage', {recipes});
  }catch (err){
    res.status(500).json(err)
  }
});

//add recipe
router.post('/', withAuth, async (req, res) => {
  try {
    const newRecipe = await Recipe.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newRecipe);
  } catch (err) {
    res.status(400).json(err);
  }
});
//delete recipe?
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const recipeData = await Recipe.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!recipeData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;