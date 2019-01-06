const express = require('express');
const featureToggles = require('./featureToggles');

const port = process.env.PORT || 5432;
const envName = process.env.ENVIRONMENT || 'local';

const app = express();

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/featureToggles', (req, res) => {
  res.header('Content-Type', 'application/json');
  res.send(JSON.stringify(
    featureToggles[envName],
  ));
});
