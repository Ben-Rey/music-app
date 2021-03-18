const usersRouter = require("express").Router({ mergeParams: true });
const userController = require("../controllers/users.controller");

usersRouter.post("/", new userController().create);
usersRouter.get("/", new userController().list);
usersRouter.get("/:userId", new userController().get);

module.exports = usersRouter;
