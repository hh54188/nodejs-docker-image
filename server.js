const express = require('express');

const PORT = 8080;
// https://stackoverflow.com/questions/20778771/what-is-the-difference-between-0-0-0-0-127-0-0-1-and-localhost
const HOST = '0.0.0.0'

const app = express();
app.get('/', (req, res) => {
  console.log(JSON.stringify(req.query))
  res.send(`${new Date()}${JSON.stringify(req.query)}`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);