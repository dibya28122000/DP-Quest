const express = require('express');
const app = express();
app.use('/api', (req, res) => {
  res.json({ url: req.url, originalUrl: req.originalUrl, path: req.path });
});
app.use('/', (req, res) => {
  res.json({ root_url: req.url, originalUrl: req.originalUrl, path: req.path });
});
app.listen(3001, () => console.log('Listening on 3001'));
