const router = require('express').Router();
const { Meal } = require('../../models');
const withAuth = require('../../utils/auth');

//get all saved meals - works in insomnia
router.get('/', withAuth, async (req, res)=>{
  // return res.json({"name": "whitney"})
  try{
    const mealData = await Meal.findAll({
      // where:{
      //   user_id: req.session.user_id
      // }
    });
    //serialize data
    const meals = mealData.map((project) => project.get({ plain: true }));
    //render user recipes on home page
    res.render('homepage', {meals});
    res.json(mealData)
  }catch (err){
    res.status(500).json(err)
  }
});

//get one meal by id -- working  in insomnia
router.get('/:id', async (req, res)=>{
  // return res.json({"name": "whitney"})
  try{
    const mealData = await Meal.findByPk(req.params.id);
    //serialize data
    const meal = mealData.map((project) => project.get({ plain: true }));
    //render user recipes on home page
    res.render('view', {meal});
    res.json(mealData)
  }catch (err){
    res.status(500).json(err)
  }
});

//add recipe - works in insomnia and user_id works correctly
router.post('/', async (req, res) => {
  try {
    const newMeal = await Meal.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newMeal);
  } catch (err) {
    res.status(400).json(err);
  }
});
//delete recipe - works in insomnia
router.delete('/:id', async (req, res) => {
  try {
    const mealData = await Meal.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!mealData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(mealData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;