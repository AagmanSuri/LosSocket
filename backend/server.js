//initialisation
const express = require("express");
const app = express();

const server = require("http").createServer(app);

const io = require("socket.io")(server);
// line connection creation to connect with server
io.on("connection", (socket) => {
  console.log("what is socket:", socket);
  console.log("socket is active to be connected");

  // event creation with the name chat
  socket.on("chat", (payload) => {
    console.log("what is payload", payload);
    //we are here emitting who ever listens we are going to send the payload
    io.emit("chat", payload);
  });
});
//Not to listen like this
//app.listen(5000,()=>console.log("server is active...");)

server.listen(5000, () => {
  console.log("server is listening at port 5000");
});
