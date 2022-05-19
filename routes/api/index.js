const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');
const commentRoutes = require('./comment_routes');

// add prefixes of '/pizzas' to routes created in 'pizza-routes.js'
router.use('/pizzas', pizzaRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
