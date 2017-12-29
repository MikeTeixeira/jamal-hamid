const express = require('express');


var app = express();

app.get('/', (req,res) => {
  res.json({message: "hello"});
});

if (process.env.NODE_ENV === 'production') {

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