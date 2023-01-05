const express = require('express');
const config = require('dotenv').config();
const app = express();
const port = 3001; //TODO move port to .env
const cors = require('cors');

app.listen(config.SERVERPORT, ()=> {
    console.log(`Server started on port: ${port}`)
})
app.use(cors({
    origin: 'http://localhost:3000'
}));

// ROUTES

//Account route - /api/account/*
const Account = require("./routes/Account");
app.get('/api/account/:action', async (req, res) => {
    res.json(await Account(req, res, "get"));
})
app.post('/api/account/:action', async (req, res) => {
    res.json(await Account(req, res, "post"));
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