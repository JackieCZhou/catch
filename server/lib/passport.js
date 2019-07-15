const passport = require('./node_modules/passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('./node_modules/passport-jwt');

const db = require('../models');

var JWT_STRATEGY_OPTS = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET || 'secret',
};

passport.use(
  new JwtStrategy(JWT_STRATEGY_OPTS, function (jwtPayload, done) {
    db.Users.findOne({ _id: jwtPayload.sub })
      .then(user => done(null, user || false))
      .catch(err => done(err, false));
  })
);

const JWTVerifier = passport.authenticate('jwt', { session: false });

module.exports = {
  passport,
  JWTVerifier
};
