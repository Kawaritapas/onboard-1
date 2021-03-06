var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20").Strategy;
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (id, done) {
  done(null, id);
});

passport.use(
  new GoogleStrategy(
    {
      clientID:"379364935646-3lnpmaitk4j03c1vkmissgmmpb8ra5fs.apps.googleusercontent.com",
      clientSecret: "u4H4j0VcmRFcES5v3P_nnFRX",
      callbackURL: "http://localhost:3002/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);
