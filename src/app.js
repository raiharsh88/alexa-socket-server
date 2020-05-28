const express = require("express");
const app = express();
const mongoURL = require("./keys").mongodbKey;
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const path = require("path");

let port = process.env.PORT || 3000;

const path_to_static = path.join(__dirname, "/../public");

console.log(path_to_static);
app.use(express.static(path_to_static));

//Send the login page

app.get("/auth", (req, res) => {
  res.sendFile("index.html", { root: path_to_static });
});

//Send the authrization token
app.post("/auth", (req, res) => {
  res.send({ res: "submitted" });
});

//get authentication request
app.get("/auth", (req, res) => {
  res.send({ res: "you getted auth data" });
});
//post authentication request;

app.post("/auth", (req, res) => {
  console.log(req.body);
  res.send({ res: "you posted auth data" });
});

io.on("connection", (socket) => {
  socket.on("data", (msg) => {
    console.log("message: " + msg);
  });
});

http.listen(port, () => {
  console.log(`Server started on ${port}`);
});
