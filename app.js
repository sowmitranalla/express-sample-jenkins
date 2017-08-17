var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World");
});

app.get('/hello', function(req, res){
	res.send("trying to build automatically")
})

app.listen(4000);
