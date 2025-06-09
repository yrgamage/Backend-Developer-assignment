const express = require('express');
const app = express();

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    console.log('Received a request');
  res.render('index');
});

app.listen(3000);