const express = require('express');
const path = require("path");
const app = express();
const mysql = require('mysql');
const cors = require('cors');
require("dotenv").config();

const db = mysql.createPool({
    host: "database-2.clkm0aogb7m4.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "password1",
    database: "products"
});

app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use(cors());

app.get('/', (req, res) =>{
    res.send('jjj');
});

app.get('/products', (req, res) => {
    // console.log(req)
       db.query('SELECT * FROM productsList', (err, result) =>{
        if (err) {
            throw err;
        }
        res.status(200).json(result);
    }) 
    
});

    //set static folder
    
    app.use(express.static(path.resolve(__dirname, './client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });



app.listen(3001, () => {
    console.log('Running on port 3001');
});

