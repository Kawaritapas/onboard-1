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
      clientID:"add your client id",
      clientSecret: "add your client secret",
      callbackURL: "http://localhost:3002/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);
