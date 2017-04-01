
var express = require('express');
var bodyParser = require('body-parser');
var chat = require('./chat');

var app = express();
app.listen(8345, function() { console.log('Server is running 8345')});

app.use(express.static(__dirname + '/chat/ui'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/chat',  chat.list);
app.post('/chat', chat.create);

//создание списка пользователей с паролем
app.get('/users', user);
var data = require('./users.json');
var nextId = data.meta.nextId;
var users = data.users;

function user(req, res) {
  res.json(users);
    //res.json(users);
}

//function post(req, res) {
//  var name    = req.body.name;
//  var password = req.body.password;
//  console.log('Name: %s, Password: %s', name, password);
//  res.send('ok');
//}




