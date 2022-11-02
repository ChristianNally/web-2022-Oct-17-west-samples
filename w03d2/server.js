//
// INITIAL CONFIGURATION
//
const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = 8083;

app.set('view engine', 'ejs');

//
// MIDDLEWARE
//
app.use(express.urlencoded({extended: false}));
app.use(morgan("dev"));

//
// DATABASE
//
const asteroids = {
  'dimorphos': {r1: 1000, r2: 200, mass: 5000, name: 'dimorphos'},
  'didymous': {r1: 1000, r2: 200, mass: 1000, name: 'didymous'},
};

//
// ROUTES
//

//
// BROWSE
//
app.get('/', (req, res) => {
  const templateVars = {
    asteroidList: asteroids
  };
  res.render('home', templateVars);
});

//
// ADD
//
app.get('/asteroid/add', (req, res) => {
  res.render('add');
});

app.post('/asteroid/add', (req, res) => {
  console.log('req.body', req.body);
  asteroids[req.body.name] = {
    name: req.body.name,
    mass: req.body.mass,
    r1: req.body.r1,
    r2: req.body.r2
  };
  res.redirect('/');
});

//
// READ /asteroid/dimorphos
//
app.get('/asteroid/:name', (req, res) => {
  const name = req.params.name;

  const templateVars = {
    asteroid: asteroids[name]
  };
  res.render('asteroid', templateVars);
});

//
// EDIT
//
app.get('/asteroid/:name/edit', (req, res) => {
  const templateVars = {
    a: asteroids[req.params.name]
  };
  res.render('edit', templateVars);
});

app.post('/asteroid/:name/edit', (req, res) => {
  asteroids[req.body.name] = {
    name: req.body.name,
    mass: req.body.mass,
    r1: req.body.r1,
    r2: req.body.r2
  };
  res.redirect('/');
});

//
// DELETE
//
app.get('/asteroid/:name/delete', (req, res) => {
  delete asteroids[req.params.name];
  res.redirect('/');
});


// 404
app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});