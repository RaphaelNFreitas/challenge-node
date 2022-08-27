const express = require('express')
const app = express()
const faker = require("faker")
const connection = require('./database/mysql-database');

const port = 3000

app.get('/', (req, res) => {

    const fakerPeople = faker.name.findName();

    connection.query(`INSERT INTO people(name) values("${fakerPeople}")`)

    connection.query("SELECT name FROM people", (error, result, fields) => {
        res.send(`<h1>Full Cycle</h1>
        <br/>
        <br/> 
        <h4>Pessoas cadastradas
        <br/>
        <ul> ${!!result.length 
            ? result.map(p => `<li>${p.name}</li>`).join('') 
            : 'Não possui pessoas cadastradas'} </ul>`);
    })

})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})