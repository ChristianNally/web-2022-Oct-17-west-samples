// web server written with the help of express
const express = require('express');
const port = 8082;
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

// middleware
app.use(bodyParser.urlencoded({extended: false}));

// ROUTES
app.get('/', (req, res) => {
    // look for index.ejs inside a views directory
  res.render('index');
  res.end();
});

app.get('/contact', (req, res) => {
  const address = 'christian.nally@lighthouselabs.ca';

  const templateVars = {
    email: address
  };

  res.render('contact', templateVars);
  res.end();
});

app.get('/addRecipe', (req, res) => {
  res.render('addRecipe');
});

app.post('/addRecipe', (req, res) => {
//  console.log('req.body:', req.body);
  console.log('title:', req.body.title);
  res.redirect('/');
});

app.get('*', (req, res) => {
  res.render('404');
  res.end();
});

// START THE SERVER
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
