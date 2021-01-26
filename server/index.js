const server = require("http").createServer((req, res) => {
  res.writeHead(204, {
    "Access-Control-Allow-Origin": "*",
    "Acess-Control-Allow-Methods": "OPTIONS,POST,GET",
  });

  res.end("hello");
});

const socketIo = require("socket.io");

const io = socketIo(server, {
  cors: {
    origin: "*",
    credentials: false,
  },
});

io.on("connection", (socket) => {
  console.log("connected");
  socket.on("join-room", (roomId, userId) => {
    socket.join(roomId);
    socket.to(roomId).broadcast.emit("user-connected", userId);
    socket.on("disconnect", () => {
      socket.to(roomId).broadcast.emit("user-disconnected", userId);
    });
  });
});

const startServer = () => {
  const { address, port } = server.address();

  console.info(`app running at ${address}: ${port}`);
};

server.listen(process.env.PORT || 3000, startServer);
