const next = require('next');
const express = require('express');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dir: '.', dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use('/images', express.static(path.join(__dirname, 'images'), {
    maxAge: dev ? '0' : '365d',
  }));

  server.use(express.json());

  server.get('*', (req, res) => handle(req, res));

  const PORT = process.env.PORT || 3000;

  server.listen(PORT, (err) => {
    if (err) throw err;
  });
});
