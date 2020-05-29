const express = require("express");
const app = express();
const mongoURL = require("./keys").mongodbKey;
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const path = require("path");
const bodyParser = require("body-parser");

let port = process.env.PORT || 3000;

const path_to_static = path.join(__dirname, "/../public");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log(path_to_static);
app.use(express.static(path_to_static));

//Send the login page

app.get("/auth", (req, res) => {
  console.log(req.query.redirect_uri);

  res.sendFile("index.html", { root: path_to_static });
});

//Send the authrization token
app.post("/auth", (req, res) => {
  console.log(req.body);
  let data = req.body;

  let state = data.state;
  let code = "5678thisismysamplecodetoverify5678";
  data.redirect_uri += "?state=" + state + "&code=" + code;

  res.redirect(data.redirect_uri);
  // res.json({
  //   access_token: "d50d9fd00acf797ac409d5890fcc76669b727e63",
  //   token_type: "Bearer",
  //   expires_in: 3600,
  //   refresh_token: "TZzj2yvtWlNP6BvG6UC5UKHXY2Ey6eEo80FSYax6Yv8",
  // });
});

//////////////////////////////////////////////

//get authentication request
app.get("/auth/oa", (req, res) => {
  res.send({ res: "you getted auth data" });
});
//post authentication request;

app.post("/auth/oa", (req, res) => {
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
