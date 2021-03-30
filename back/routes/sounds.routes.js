const soundRouter = require("express").Router({ mergeParams: true });
const soundController = require("../controllers/sounds.controller");
const AuthMiddleware = require("../middlewares/auth");

soundRouter.get("/:room?", new soundController().list);
soundRouter.get("/sound/:soundName", new soundController().get);
soundRouter.post("/", new soundController().add);
soundRouter.delete("/:soundName", new soundController().delete);

module.exports = soundRouter;

// AuthMiddleware
