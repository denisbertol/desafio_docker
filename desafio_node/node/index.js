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

let insert = `INSERT INTO people(name) values('Denis')`
connection.query(insert)

connection.query("SELECT name FROM people", function (err, result, fields) {
    let returnstring = '<h1>Full Cycle Rocks!</h1></br>'
      if (err) throw err;      
        app.get('/', (req,res) => {
            result.forEach(function(item, index, array) {
                returnstring = returnstring + '<h2>' + result[index].name + '</h2></br>'
              })
            res.send(returnstring)
        })
    });

connection.end()

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})
