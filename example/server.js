var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var expressIsoProxy = require("../index");
var proxy = require("./proxy");

var app = express();

app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(expressIsoProxy(proxy));

app.get("/add/:x/:y", function(req, res) {
  proxy.api.math.add(+req.params.x, +req.params.y).then(function(result) {
    res.send("" + result);
  });
});

app.listen(3000);
