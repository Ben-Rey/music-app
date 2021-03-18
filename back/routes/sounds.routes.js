const soundRouter = require("express").Router({ mergeParams: true });
const soundController = require("../controllers/sounds.controller");
const AuthMiddleware = require("../middlewares/auth");

soundRouter.get("/", AuthMiddleware, new soundController().list);
soundRouter.get("/:soundId", AuthMiddleware, new soundController().get);
soundRouter.post("/", AuthMiddleware, new soundController().add);

module.exports = soundRouter;
