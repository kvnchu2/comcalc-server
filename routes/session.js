module.exports = function(router, database) {

  router.get('/clients', (req, res) => {
    database.getClientDates()
      .then((results) => {
        res.send(results);
      })
      .catch(e => res.send(e));
  });

  router.post('/completed/:name/:sessionsCompleted', (req, res) => {
    const name = req.params["name"];
    const sessionsCompleted = req.params["sessionsCompleted"];
    database.updateSessionsCompleted(name, sessionsCompleted)
      .then((results) => {
        res.send(results);
      })
      .catch(e => res.send(e));
  });

  return router;
};