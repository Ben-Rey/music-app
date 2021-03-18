const usersRouter = require("./users.routes");
const authRouter = require("./auth.routes");
const soundsRouter = require("./sounds.routes");

module.exports = (app) => {
  app.get("/", (req, res) => res.send("You can use : /users, /sounds"));
  app.use("/auth", authRouter);
  app.use("/users", usersRouter);
  app.use("/sounds", soundsRouter);
};
