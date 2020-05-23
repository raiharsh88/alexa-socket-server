const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
let port = process.env.PORT || 3000;

const path = require("path");

const path_to_static = path.join(__dirname, "/../public");

console.log(path_to_static);
app.use(express.static(path_to_static));

app.get("/elevator", (req, res) => {
  res.sendFile("index.html", { root: path_to_static });
});

io.on("connection", (socket) => {
  socket.on("data", (msg) => {
    console.log("message: " + msg);
    setTimeout(() => {
      socket.emit("data", "hello from the other side");
    }, 2000);
  });
});

http.listen(port, () => {
  console.log(`Server started on ${port}`);
});
