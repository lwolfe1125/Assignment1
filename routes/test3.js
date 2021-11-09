var express = require('express');
var router = express.Router();
const { Client } = require('pg')
/* API to return all records of a table in psql*/
router.get('/', function(req, res, next) {
  try {
    const client = new Client({
        host: "134.190.160.127",
        port: 5432,
        database: "postgres",
        user: "postgres",
        password: "password",
    })
    app.get('/pgsql', async (req, res) => {
      await client.connect()
      const result = await client.query('SELECT * FROM postgres')
      res.json(result.rows) // Hello world!
      await client.end()
    })
    
    

  } catch (e) {
    console.log(e);
    res.json({
        message: e.message
    })
}
   res.json( {query: "SELECT ALL FROM my_schema.test_table"} ); 
});

module.exports = router;


