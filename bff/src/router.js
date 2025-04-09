module.exports = (router) => {
  router.get('/', (req, res) => res.render('index', { ...req }));

  return router;
};