const secretsController = require('./node_modules/express').Router();
const db = require('../../models')

const { JWTVerifier } = require('../../lib/passport');

secretsController.get('/', JWTVerifier, (req, res) => {

  db.Secrets.find({})
    .then(results => {
      res.json(results);
    })
    .catch(error => {
      if (error) throw error
    })
})

module.exports = secretsController;