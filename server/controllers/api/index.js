const apiControllers = require('./node_modules/express').Router();

apiControllers.use('/users', require('./usersController'));
apiControllers.use('/secrets', require('./secretsController'));
apiControllers.use('/stripe', require('./stripeController'));
apiControllers.use('/checkout', require('./checkoutController'));

module.exports = apiControllers;
