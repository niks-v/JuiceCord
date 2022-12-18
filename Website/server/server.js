const express = require('express');
const app = express();
const port = 3001; //TODO move port to .env

app.listen(port, ()=> {
    console.log(`Server started on port: ${port}`)
})

app.get('/api', (req, res) => {
    res.json({"users": ["test123", "test323134", "another user"]})
})