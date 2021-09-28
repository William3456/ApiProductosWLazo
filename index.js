const express = require('express');
const body_parser = require('body-parser');
const cors = require('cors');
const app = express();


app.use(body_parser.urlencoded({extended:true}));
app.use(body_parser.json());
app.use(cors());

const db_manager = require('./persistence/dbmanager');

//////// CRUD //////////

//CREAR

app.post('/product',(req, res) => {
    db_manager.product_create(req, res);
});

//Obtener
app.get('/product',(req, res) => {
    db_manager.product_read(req, res);
});

// update
app.put('/product',(req, res) => {
    db_manager.product_update(req, res);
});

//delete
app.delete('/product',(req, res) => {
    db_manager.product_delete(req, res);
});

app.get('/', (req, res) =>{
    res.send("Hello world!");
});

app.listen(process.env.PORT || 8985, () =>{
    console.log("API REST is running on 8985 port");
});