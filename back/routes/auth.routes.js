const authRouter = require("express").Router({ mergeParams: true });
const AuthController = require("../controllers/auth.controller");

authRouter.post("/login", new AuthController().login);
authRouter.post("/register", new AuthController().register);
authRouter.post("/checkToken", new AuthController().checkToken);

module.exports = authRouter;
