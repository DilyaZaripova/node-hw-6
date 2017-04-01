
var fs = require('fs');
var db = require('./posts.json');

var nextId = db.meta.nextId;
var messages = db.messages;

function list(req, res) {
  res.json(messages);
    //res.json(users);
}

function create(req, res) {
  console.log('POST %s: %s', req.body.name, req.body.password, req.body.message);
  var post = {
    id: db.meta.nextId++,
    time: new Date().getTime(),
    name:    req.body.name,
    password:    req.body.password,
    message: req.body.message
  };
  db.messages.push(post);
  update();
  res.json(post);
}

function update() {
  fs.writeFile(__dirname + '/posts.json', JSON.stringify(db), function(err) {
    if (err) console.error(err);
  }, 4);
}

exports.list = list;
exports.create = create;
