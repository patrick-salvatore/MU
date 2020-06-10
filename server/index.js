/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const port = process.env.PORT || '8080';

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./dist'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve('./dist', 'index.html'));
  });
}

const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));
