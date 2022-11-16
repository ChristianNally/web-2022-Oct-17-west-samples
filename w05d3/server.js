require('dotenv').config();

const pg = require('pg');
const express = require('express');

const app = express();

app.set('view engine', 'ejs');

// DATABASE
const configObject = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT
};

const client = new pg.Client(configObject);

client.connect()
  .then(() => {
    console.log(`DB Connected:`, configObject);
  })
  .catch((error) => {
    console.log(`DB Connection Error:`, error);
  });

// Express Routes

app.get('/', (req, res) => {
  client.query('SELECT id, question FROM objectives ORDER BY id;')
  .then((response) => {
    // console.log('response.rows', response.rows);
    for (let objective of response.rows){
      console.log(`${objective.id} :: ${objective.question}`);
    }
    const templateVars = {
      objectives: response.rows
    };
    res.render('home', templateVars);
  })
  .catch((error) => {
    console.log(`DB BROWSE Query Error:`, error);
  });
});

app.get('/objectives/:id', (req, res) => {
  const id = req.params.id;
  const queryText = `SELECT type, question, answer FROM objectives WHERE id = $1;`;

  client.query(queryText, [id])
  .then((response) => {
    const templateVars = {
      type: response.rows[0].type,
      question: response.rows[0].question,
      answer: response.rows[0].answer
    };
    res.render('objective', templateVars);
  })
  .catch((error) => {
    console.log(`DB BROWSE Query Error:`, error);
  });
});

app.listen(8888, () => {
  console.log('Server is listening on 8888');
});