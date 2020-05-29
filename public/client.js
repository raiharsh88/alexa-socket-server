$(document).ready(function () {
  const queryString = window.location.search;
  const uri = window.location.href;
  console.log("URI is ", uri);

  const urlParams = new URLSearchParams(queryString);

  let parameters = {};

  for (let [key, value] of urlParams.entries()) {
    parameters[key] = value;
  }

  $("#submit").click(function (e) {
    e.preventDefault();
    let request = $.post("/auth", parameters);

    request.done(function (data) {
      console.log(data);
    });
  });

  console.log(parameters); //Take out once deployed;
});
