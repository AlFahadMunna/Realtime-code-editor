import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
import http from "http";
import { Server } from "socket.io";

const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("socket connected", socket.id);
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
