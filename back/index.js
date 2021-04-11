const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const fileUpload = require("express-fileupload");

require("dotenv").config();
const router = require("./routes");

const cors = require("cors");
// const decodeIDToken = require("./middlewares/auth");

const app = express();
app.use(cors());
// app.use(decodeIDToken);
app.use(express.json());
app.use(fileUpload());
morgan("tiny");

const server = require("http").Server(app);
const socketio = require("socket.io");
// socket.io
io = socketio(server, {
  cors: {
    origin: "*",
  },
});

io.use((socket, next) => {
  // Add user to connected users
  //

  const username = socket.handshake.auth.username;
  if (!username) {
    return next(new Error("invalid username"));
  }
  socket.username = username;
  next();
});

io.on("connection", socket => {
  const users = [];

  for (let [id, socket] of io.of("/").sockets) {
    users.push({
      userID: id,
      username: socket.username,
    });
  }

  socket.emit("users", users);
});

io.on("connection", socket => {
  // notify existing users
  socket.broadcast.emit("user connected", {
    userID: socket.id,
    username: socket.username,
  });

  socket.on("disconnect", function () {
    socket.broadcast.emit("user disconnected", {
      userID: socket.id,
      username: socket.username,
    });
  });
});

// now all request have access to io
app.use(function (req, res, next) {
  req.io = io;
  next();
});

app.use(express.static("public"));

mongoose
  .connect(process.env.MONGO_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch(err => console.log("Error connecting database", err.message));

router(app);

const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Serveur is running on port ${PORT}`);
});
