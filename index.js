const express = require('express');
const app = express()
const mysql = require('mysql');

const db = mysql.createPool({
    host: "database-2.clkm0aogb7m4.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "password1",
    database: "products"
});

app.get('/', (req, res) =>{
    res.send('daf')
});

app.listen(3001, () => {
    console.log('Running on port 3001');
});
