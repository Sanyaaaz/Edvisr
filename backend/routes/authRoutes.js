const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const router = express.Router();

// Configure Passport Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // You can store the user profile in DB here
      return done(null, profile);
    }
  )
);

// Serialize and Deserialize user
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

// Google Auth Route
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// Google Auth Callback
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    const token = "your_generated_token"; // Replace with real token logic
    res.redirect(`${process.env.FRONTEND_URL}/auth?token=${token}`);
  }
);

module.exports = router;
