const express = require('express');
const app = express();
const port = 3001; //TODO move port to .env

app.listen(port, ()=> {
    console.log(`Server started on port: ${port}`)
})

const Account = require("./routes/Account");
app.get('/api/account/:action', (req, res) => {
    res.json(Account(req,res));
})

const Affiliates = require("./routes/Affiliates");
app.get('/api/affiliates/:action', (req, res) => {
    res.json(Affiliates(req,res));
})