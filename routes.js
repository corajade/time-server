var express=require("express");
var app=express();
var url=require("url");

app.get(/./, function(req, res){
  var obj= url.parse(req.url); 
  console.log(obj);
  console.log(obj["path"]);
  res.end("Done")
});

app.listen(8080);