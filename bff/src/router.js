const registerController = require('./controllers/registerController');

module.exports = (router) => {
  router.get('/', (req, res) => res.render('index', { ...req }));
  router.post('/register', registerController.post);
  return router;
};