process.env.PWD=process.cwd();
var express=require("express");
var app=express();
var url=require("url");

var checkStr=require(process.cwd()+ "/checkStr.js");
app.use(express.static(process.env.PWD + "/public"));
app.get("/", function(req, res){
  
  
  res.sendFile(process.env.PWD+ "/public/index.html");
  res.end();
})

app.get(/./, function(req, res){
  var obj= url.parse(req.url); 
   
  var str=obj["path"].slice(1);
  
  var answer=checkStr(str);

  res.send(answer);
  res.end();
});

app.listen(process.env.PORT || 8080);