
//dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var keys = require('./config/keys');
var session = require('express-session');
var MongoDBStore = require('connect-mongodb-session')(session);
var uuidv4 = require('uuid/v4');
var assert = require('assert');
var cookieParser = require('cookie-parser');

//require in our Models
require('./models/ServicePackages');
require('./models/UserCartSession');
var UserCartSession = require('./models/UserCartSession');

//Import dev/production keys to access DB
mongoose.connect(keys.mongoURI);


//instances
var app = express();
var mongoStore = new MongoDBStore({
  uri: keys.mongoURI,
  collection: 'cookieSession'
});

mongoStore.on('error', function(error) {
  assert.ifError(error);
  assert.ok(false);
});

//Config API to use bodyParser
//Returns JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


//Use Express-session to create a cookie session
//uuid Creates a random ID. Max cookie age is set to approximately 1 day.
//Also connects our mongoDB to express session.
app.use(session({
  genId: function (req) {
    return uuidv4();
  },
  secret: '901249UB918FBASF91214T0B',
  cookie: {
    maxAge: 600000,
  },
  resave: true,
  saveUninitialized: true
}));


app.get('/', function(req, res){
  res.send(req.session);
});


require('./routes/servicesRoutes')(app);
require('./routes/packageRoutes')(app);
require('./routes/cartRoutes')(app);


//Production settings

if (process.env.NODE_ENV === 'production') {

  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies

  //Express serves up production assets -- main.js/main.css
  app.use(express.static('client/build'));

  //Express serves up index.html file if route not found
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendfile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
};



const PORT = process.env.PORT || 5000;

app.listen(PORT);