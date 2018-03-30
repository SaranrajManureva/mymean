var express = require('express');
var bodyParser = require('body-parser');
var path = require('path')
var http = require('http')
var app = express();

var api = require('./server/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.use('/api',api)
app.use(express.static(path.join(__dirname, 'dist'))); 
 

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
}); 

var port = process.env.PORT || '3000';

app.set('port',port);

const server = http.createServer(app);

server.listen(port,() => console.log('Server is Running'));