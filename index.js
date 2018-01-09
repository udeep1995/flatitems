const express = require('express');
const bp = require('body-parser');
const app = express();
var items = [];
app.use(express.static('./public'));
app.use(bp.urlencoded({
  extended: true
}))
app.use(bp.json());
const port = process.env.PORT || 3000;
app.listen(port, function(req, res) {
  console.log("Server Started at " + port);
});
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/', function(req, res) {
  res.send(index.html);
});
app.get('/getitems', function(req, res) {
  res.send(items);
})

app.post('/additems', function(req, res) {
  items.push(req.body);
})
app.get('/clearitems',function(req,res){
  items = [];
})
app.get('/test', function(req, res) {
  res.send('TEST ROUTE WORKING');
})
