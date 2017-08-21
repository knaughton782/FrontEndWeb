var express = require("express");
var path = require("path");
const app = express();
//very important next 10 lines
const port = 8080;

app.use(express.static("./views/"));

//homepage
app.get("/", function(req, res) {
  res.sendFile(path.resolve(__dirname + "/views/index.html"));
});

//about page
app.get("/about", function(req, res) {
  res.sendFile(path.resolve(__dirname + "/views/about.html"));
});

//error
app.get("*", function(req, res) {
  res.sendFile(path.resolve(__dirname + "/views/404.html"));
});

app.listen(port, function() {
  console.log("listening on port " + port);
});
