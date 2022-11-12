const express = require('express');
const app = express();
const port = 80;
var date = Date.now();

app.get('/', (req, res) => {
    res.json({ 
    message: 'My name is David Coles', 
    timestamp: date,
    });
});

app.listen(port, () => console.log(`App listening on port ${port}!`))
