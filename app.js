const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Everyone, I am finally here! I really hope this ends up working fr fr'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
