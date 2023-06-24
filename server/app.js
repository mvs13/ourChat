const express = require("express");
var cors = require("cors");

const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();

app.use(cors());

app.get("/", async (req, res) => {
  return res.send("Root");
});
var roomRouter = require("../routes/chatRoom");
app.use("/room", roomRouter);
var userRouter = require("../routes/chatUser");
app.use("/user", userRouter);
var msgRouter = require("../routes/chatMessage");
app.use("/msg", msgRouter);

const { initModels } = require("../models/init");
(async () => {
  await initModels();
})();

// Сервер приложения
app.listen(3000, async () => {
  console.log(`Server started!`);
});

// Socket-сервер
const httpServer = createServer(app);
const io = new Server(httpServer, {
  // Enable CORS
  cors: {
    // Address application
    origin: "http://localhost:8080",
  },
});

io.on("connection", (socket) => {
  // console.log(`Socket init as ${socket}`);
  // console.log(socket);

  socket.emit("handshake", "Welcome to ourChat!");

  socket.on("join", (arg) => {
    io.emit("has-new-join", "Somebody just joined");
  });

  socket.on("connection2room", (arg) => {
    // console.log(socket.rooms[0]);
    socket.rooms.forEach((value, valueAgain, set) => {
      socket.leave(value);
    });
    socket.join(arg.room);

    console.log(`Joined to ${arg.room}`);
    io.to(arg.room).emit("inroom", "New user in room!");
  });

  socket.on("message", (arg) => {
    console.log(arg);
  });
  socket.on("disconnect", (reason) => {
    console.log(reason);
  });
});

// const rooms = io.of("/").adapter.rooms;
// const sids = io.of("/").adapter.sids;
// io.of("/").adapter.on("create-room", (room) => {
//   console.log(`room ${room} was created`);
// });
// io.of("/").adapter.on("join-room", (room, id) => {
//   console.log(`socket ${id} has joined room ${room}`);
// });

// setInterval(() => {
//   io.emit("bcst-servertime", { serverTime: new Date() });
// }, 10000);

httpServer.listen(3001);
