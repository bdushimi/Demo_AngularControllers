var express = require('express');
var path = require('path');
var app = express();
var rootPath = path.normalize(__dirname + '/../');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static( rootPath + '/app'));

app.get('/', function (req, res) {
    res.sendFile(rootPath + '/app/index.html');
});
app.get('/userDetails', function (req, res) {
    res.sendFile(rootPath + '/app/userDetails/userDetails.html');
});

app.listen(8000);
console.log('Listening on port ' + 8000 + '...');