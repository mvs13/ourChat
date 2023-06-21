const express = require("express");

const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();

app.get("/", async (req, res) => {
  return res.send("Root");
});

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
  console.log(`Socket init as ${socket}`);
  // console.log(socket);

  socket.emit("handshake", "Welcome to ourChat!");

  socket.on("message", (arg) => {
    console.log(arg);
  });
  socket.on("disconnect", (reason) => {
    console.log(reason);
  });
});

httpServer.listen(3001);
