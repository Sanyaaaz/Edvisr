const express = require("express");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(session({ secret: "secretkey", resave: false, saveUninitialized: true }));

// Passport Setup
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
