const express = require('express');
const path = require('path');
const app = express();
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const port = process.env.PORT || 7301;
const hostname = process.env.HOST || 'localhost';

app.use(helmet());
app.use(compress({ threshold: '16k' }));
app.use(cors());

app.use(express.static(path.join(__dirname, 'build/')));

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, 'build/') });
});

app.listen(port, hostname, () => {
  console.log('Express server listening on port ' + port);
});
