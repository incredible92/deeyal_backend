const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to Deeyal Store');
});

const port = process.env.POT || 3030;
app.listen(port, () => {
  console.log(`Listening to port ${port} ...`);
});