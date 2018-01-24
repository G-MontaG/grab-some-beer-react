'use strict';

let express = require('express');
let path = require('path');
let app = express();
let compress = require('compression');
let cors = require('cors');
let helmet = require('helmet');
let port = process.env.PORT || 7301;
let hostname = process.env.HOST || "localhost";

app.use(helmet());
app.use(compress({threshold: '16k'}));
app.use(cors());

app.use(express.static(path.join(__dirname, 'build/')));

app.get('*', (req, res) => {
  res.sendFile("index.html", {root: path.join(__dirname, 'build/')});
});

app.listen(port, hostname, () => {
  console.log('Express server listening on port ' + port);
});
