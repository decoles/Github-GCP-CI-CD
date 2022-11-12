const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
    res.json({ 
    message: 'My name is David Coles', 
    timestamp: 15151151,
    });
});

app.listen(port, () => console.log(`App listening on port ${port}!`))


