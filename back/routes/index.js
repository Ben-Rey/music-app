const usersRouter = require("./users.router");

module.exports = (app) => {
  app.get("/", (req, res) => res.send("You can use : /users, /sounds"));
  app.use("/users", usersRouter);
  // router.use("/sounds", require("./sounds.router"));
};
