var express=require("express");
var app=express();
var url=require("url");
var checkStr=require(process.cwd()+ "/checkStr.js");

app.get(/./, function(req, res){
  var obj= url.parse(req.url); 
   
  var str=obj["path"].slice(1);
  var answer=checkStr(str);

  res.send(answer);
  res.end();
});

app.listen(8080);