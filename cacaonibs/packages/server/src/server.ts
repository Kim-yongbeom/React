// mkdir cacaonibs
// cd cacaonibs
// npm init (계속 엔터 후 마지막 yes)
// npm i lerna
// npx lerna init
// cd packages
// mkdir client , mkdir server
// cd server
// npm init
// npm i express ts-node
// npm i @types/express @types/node nodemon typescript -D

// import express, { Application } from "express";

// const app: Application = express();

// app.listen(8000, () => {
//   console.log("start");
// });

// 위 코드 작성하고
// npx tsc --init

// package.json 에서 스크립트 안에 "start": "nodemon --exec ts-node src/server.ts" 넣기
// npm i sequelize uuid sqlite3
// npm i @types/uuid -D

/* -------------------------실습코드------------------------- */
// npm i express-session session-file-store  => 세션정보를 DB가 아닌 파일에 저장하게해줌
// npm i @types/express-session -D
// npm i socket.io cors
import express, { Application } from "express";
import session from "express-session";
import cors from "cors";

import sequelize from "./sequelize";
import routes from "./routes";
import socket from "./socket";

const FileStore = require("session-file-store")(session);

const app: Application = express();

const sessionMiddleware = session({
  // 세션을 암호화하여 저장
  secret: "cacaonibs",
  // 세션이 저장되기전 언이니셜라이즈된 상태로 저장
  saveUninitialized: true,
  cookie: { secure: false },
  // 세션을 언제 저장할지 정하는 값
  resave: false,
  store: new FileStore(),
});

app.use(sessionMiddleware);
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
// request로 body를 사용할 수 있음
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: true });

app.use("/", routes);

const server = app.listen(8000, () => {
  console.log("start");
});

socket(server, app, sessionMiddleware);
