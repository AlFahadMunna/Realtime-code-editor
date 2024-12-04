import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
import http from "http";
import { Server } from "socket.io";
import { ACTIONS } from "./Actions.js";

const server = http.createServer(app);
const io = new Server(server);

const userSocketMap = {};

io.on("connection", (socket) => {
  console.log("socket connected", socket.id);
  socket.on(ACTIONS.JOIN, ({ roomId, username }) => {
    userSocketMap[socket.id] = username;
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
