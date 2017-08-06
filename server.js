require('dotenv').config();

const express = require('express');
const path = require('path');
const config = require('./config');
const open = require('open');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.dev');


const app = express();
const compiler = webpack(webpackConfig);


if(process.env.NODE_ENV !== 'production') {
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

app.use(express.static('dist'));

app.use('/api', require('./api'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});


app.listen(config.port, () => {
  console.log('Server listening on port %s, Ctrl+C to stop', config.port);  // eslint-disable-line no-console
  // if(process.env.NODE_ENV !== 'production') open(`http://localhost:${config.port}/`);
});
