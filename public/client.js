$(document).ready(function () {
  var socket = io("http://localhost:3000");

  $("button").click(function () {
    let msg = $("input").val();
    $("input").val("");

    socket.emit("data", msg);
  });

  socket.on("connection", () => {
    console.log("connected");
  });

  socket.on("data", function (data) {
    console.log(data, " This is data");
  });
});
