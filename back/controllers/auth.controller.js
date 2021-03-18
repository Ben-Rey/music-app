const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = class AuthController {
  // POST /auth/login
  async login(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const existingUser = await userModel.findOne({ email: email });
    let correctPassword;
    try {
      correctPassword = await bcrypt.compare(
        password,
        existingUser.password || ""
      );
    } catch (error) {
      console.log(error);
    }

    if (!existingUser || !correctPassword) {
      return res.status(400).json({ error: "Bad credentials" });
    }

    existingUser.token = jwt.sign(
      { email: existingUser.email },
      process.env.JWT_SECRET
    );
    existingUser.save();

    res.json({
      access_token: existingUser.token,
    });
  }

  // POST /auth/register
  async register(req, res) {
    // ({ pseudo, email, password } = req.body);
    const pseudo = req.body.pseudo;
    const email = req.body.email;
    let password = req.body.password;

    const existingUser = await userModel.findOne({ email: email });

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    password = await bcrypt.hash(password, 10);

    try {
      let newUser = await new userModel({
        pseudo: pseudo,
        email: email,
        password: password,
      }).save();
      res.json({
        newUser,
      });
    } catch (error) {
      return res.status(error.status).json({ error: error.message });
    }
  }

  async checkToken(req, res) {
    if (!req.token) {
      return res.status(403).json({ error: "No credentials provided" });
    }
    const token = req.token;
    try {
      jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      return res.status(401).json({ error: "Invalid token" });
    }
    const connectedUser = await userModel.findOne({ token: token }).lean(true);

    if (!connectedUser) {
      return res.status(404).json({ error: "Token not found" });
    } else {
      return res.status(200).json({ success: "Valid Token" });
    }
  }
};
