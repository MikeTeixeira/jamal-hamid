const express = require('express');


var app = express();

app.get('/', (req,res) => {
  res.json({message: "hello"});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);