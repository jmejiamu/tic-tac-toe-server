import express from "express";
import http from "http";
import { Server } from "socket.io";
import { setupSockets } from "./socket";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

setupSockets(io);

server.listen(4000, () => {
  console.log("Server is running on port http://localhost:4000");
});
