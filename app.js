const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World Charitha (V1.21) - Review OK Yes !!!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
