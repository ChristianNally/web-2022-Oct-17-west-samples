const pg = require('pg');

const configObject = {
  user: 'postgres',
  host: 'localhost',
  database: 'spot',
  password: 'postgres',
  port: 5433
};

const client = new pg.Client(configObject);

client.connect()
  .then(() => {
    console.log(`DB Connected:`, configObject);
  })
  .catch((error) => {
    console.log(`DB Connection Error:`, error);
  });

const verb = process.argv[2];
const id = process.argv[3];

switch (verb) {
  case 'browse':
      client.query('SELECT id, question FROM objectives ORDER BY id;')
      .then((response) => {
        // console.log('response.rows', response.rows);
        for (let objective of response.rows){
          console.log(`${objective.id} :: ${objective.question}`);
        }
        client.end();
      })
      .catch((error) => {
        console.log(`DB BROWSE Query Error:`, error);
      });
    break;
  case 'read':
    const queryText = `SELECT type, question, answer FROM objectives WHERE id = $1;`;
    console.log('queryText', queryText);

    client.query(queryText, [id])
    .then((response) => {
      // console.log('response.rows', response.rows);
      for (let objective of response.rows){
        console.log(`TYPE: ${objective.type}`);
        console.log(`QUESTION: ${objective.question}`);
        console.log(`ANSWER: ${objective.answer}`);
      }
      client.end();
    })
    .catch((error) => {
      console.log(`DB READ Query Error:`, error);
    });
    break;
  case 'edit':
    break;
  case 'add':
    break;
  case 'delete':
    break;
  default:
      console.log('usage: node cli.js [browse || read || edit || add || delete]');
    break;
}
