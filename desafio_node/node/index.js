const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const insert = `INSERT INTO people(name) values('Denis')`
connection.query(insert)

connection.query("SELECT name FROM people", function (err, result, fields) {
      if (err) throw err;
        app.get('/', (req,res) => {
            res.send('<h1>Full Cycle</h1></br>' + result[0].name)
        })
    });

connection.end()

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})
