const express = require('express');
const config = require('dotenv').config().parsed;
const app = express();
const port = config.SERVERPORT;

app.listen(config.SERVERPORT, ()=> {
    console.log(`Server started on port: ${port}`)
})

app.use(express.json())

// ROUTES

//Account route - /api/account/*
const Account = require("./routes/Account");
app.get('/api/account/:action', async (req, res) => {
    res.json(Account(req, res, "get"));
})
app.post('/api/account/:action', async (req, res) => {
    Account(req, res, "post").then(json => {
        console.log(json);
        res.json(json);
    })
    
})


//Affiliates route - /api/affiliates/*
const Affiliates = require("./routes/Affiliates");
app.get('/api/affiliates/:action', async (req, res) => {
    res.json(await Affiliates(req, res, "get"));
})
app.post('/api/affiliates/:action', async (req, res) => {
    res.json(await Affiliates(req, res, "post"));
})

const DB = require("./database/Actions");