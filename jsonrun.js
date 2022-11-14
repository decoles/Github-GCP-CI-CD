const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
    res.json({ 

    GCPBuildTest: 'Update without manual push succesful'
    });
});

app.listen(port, () => console.log(`App listening on port ${port}!`))
