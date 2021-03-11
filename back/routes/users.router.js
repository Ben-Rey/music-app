const usersRouter = require("express").Router({ mergeParams: true });
const userController = require("../controllers/users");

usersRouter.get("/", new userController().get);
usersRouter.post("/", new userController().create);

module.exports = usersRouter;
