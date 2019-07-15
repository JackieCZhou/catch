const controllers = require('./node_modules/express').Router();

const apiControllers = require('./api');

controllers.use('/api', apiControllers);

module.exports = controllers;
