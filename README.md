# Multiplayer Tic-Tac-Toe — Server 🚀

A lightweight TypeScript server using Express and Socket.IO that implements a 1v1 multiplayer tic-tac-toe game.

---

## 🔧 Requirements

- Node.js 18+ (recommended)
- npm (or yarn)

---

## ⚡ Quick start

Install dependencies:

```bash
npm install
```

Run in development (hot reload with ts-node + nodemon):

```bash
npm run dev
```

Build and run production bundle:

```bash
npm run build
npm start
```

The server listens on port 4000 by default: http://localhost:4000

> Tip: change the port in `src/server.ts` if you need a different one.

---

## 🧭 Socket API (quick reference)

Connect to the server via Socket.IO client:

```js
import { io } from "socket.io-client";
const socket = io("http://localhost:4000");
```

Server-sent events:

- `game_start` — Sent to both players when a match is ready
  - payload: `{ roomId: string, board: ("X"|"O"|null)[], currentTurn: "X"|"O", mySymbol: "X"|"O" }`
- `game_state` — Sent when a valid move updates the board
  - payload: `{ board: ("X"|"O"|null)[], currentTurn: "X"|"O" }`
- `game_over` — Sent when there's a winner or a draw
  - payload: `{ board: ("X"|"O"|null)[], winner: "X"|"O"|null, isDraw: boolean }`

Client-sent events:

- `make_move` — Make a move in a room
  - payload: `{ roomId: string, index: number, symbol: "X"|"O" }`
- `reset_game` — Request to reset the game in a room
  - payload: `{ roomId: string }`

Notes:

- The server matches two connected sockets into a room and assigns symbols: the waiting player is `X`, the joining player is `O`.
- Default port is 4000.

---

## 📁 Project structure

- `src/server.ts` — Express + HTTP server entry (creates Socket.IO server)
- `src/socket/*` — Socket event registration and handlers
- `src/game/*` — Game logic and room store
- `src/types/*` — Shared TypeScript types
- `tsconfig.json` — TypeScript configuration

---
