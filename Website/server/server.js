const express = require('express');
const config = require('dotenv').config();
const app = express();
const port = 3001; //TODO move port to .env

app.listen(config.SERVERPORT, ()=> {
    console.log(`Server started on port: ${port}`)
})

// ROUTES

//Account route - /api/account/*
const Account = require("./routes/Account");
app.get('/api/account/:action', (req, res) => {
    res.json(Account(req, res, "get"));
})
app.post('/api/account/:action', (req, res) => {
    res.json(Account(req, res, "post"));
})


//Affiliates route - /api/affiliates/*
const Affiliates = require("./routes/Affiliates");
app.get('/api/affiliates/:action', (req, res) => {
    res.json(Affiliates(req, res, "get"));
})
app.post('/api/affiliates/:action', (req, res) => {
    res.json(Affiliates(req, res, "post"));
})

const DB = require("./database/Actions");

DB.test();