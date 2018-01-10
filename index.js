const express = require('express');
const bp = require('body-parser');
const fs = require('fs');
const path = require('path');
const app = express();
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
  fs.readFile('data/items.json', function(err, data) {
    res.send(JSON.parse(data));
  });
})
app.post('/additems', function(req, res) {
  fs.readFile('data/items.json', function(err, data) {
    let currentItems = JSON.parse(data);
    let newItems = req.body;
    currentItems.push(newItems);
    fs.writeFile('data/items.json', JSON.stringify(currentItems), function(err) {})
  });
})
app.get('/clearitems', function(req, res) {
  fs.readFile('data/items.json', function(err, data) {
    let lastOrderItems = JSON.parse(data);
    fs.writeFile('data/items.json', JSON.stringify([]), function(err) {})
    fs.writeFile('data/lastorder.json', JSON.stringify(lastOrderItems), function(err) {})
  });
})
app.get('/lastorder', function(req, res) {
  fs.readFile('data/lastorder.json', function(err, data) {
    res.send(JSON.parse(data));
  })
})
app.get('/test', function(req, res) {
  res.send('TEST ROUTE WORKING');
})
