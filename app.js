var express = require("express");
var path = require("path");
const app = express();
var opn = require("opn");

const port = 8080; //indicates localhost port

app.use(express.static("./views/"));
app.use(express.static(path.resolve(__dirname + "/public"))); //adding css to public for file access

app.get("/", function(req, res) {
  res.sendFile(path.resolve(__dirname + "/public/views/index.html")); //to add css to public
});
//homepage
app.get("/", function(req, res) {
  res.sendFile(path.resolve(__dirname + "/views/index.html"));
});

//about page
app.get("/about", function(req, res) {
  res.sendFile(path.resolve(__dirname + "/views/about.html"));
});

//contact
app.get("/favorites", function(req, res) {
  res.sendFile(path.resolve(__dirname + "/views/favorites.html"));
});

//blog
app.get("/blog", function(req, res) {
  res.sendFile(path.resolve(__dirname + "/views/blog.html"));
});
//error
app.get("*", function(req, res) {
  res.sendFile(path.resolve(__dirname + "/views/404.html"));
});

app.listen(port, function() {
  console.log("listening on port " + port);
  opn("http://localhost:" + port);
});
