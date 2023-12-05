const router = require('express').Router();
const { User, Meal } = require('../models');
const withAuth = require('../utils/auth');

//render meal view for the meal selected using its id
router.get('/meals/:id', withAuth, async (req, res) => {
  try {
    const mealData = await Meal.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const meal = mealData.get({ plain: true });

    res.render('meal', {
      meal,
      logged_in: req.session.logged_in
    });
 
  } catch (err) {
    res.status(500).json(err);
  }
});

//add meal page render
router.get('/add', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Meal }],
    });

    const user = userData.get({ plain: true });

    res.render('add', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get route to render homepage with user data and meals associated with the user id

router.get('/', withAuth, async (req, res) => {
  console.log(req.session.user_id);
  
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Meal }],
    });

    const user = userData.get({ plain: true });
    console.log(user);
    res.render('homepage', {
      user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//login redirect route redirects to the home page 
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
