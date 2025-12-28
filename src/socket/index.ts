import type { Server } from "socket.io";
import { registerSocketHandlers } from "./handler";

export const setupSockets = (io: Server) => {
  io.on("connection", (socket) => {
    registerSocketHandlers(io, socket);
  });
};
