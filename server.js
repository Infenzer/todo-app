const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const path = require('path')
const webpack = require('webpack');

const app = express()
const webpackConfig = require('./webpack.config.js');
const compiler = webpack(webpackConfig);

app.use(express.static(path.resolve(__dirname, 'client', 'public')))

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
}));
app.use(require("webpack-hot-middleware")(compiler));

// app.use('/api/auth', require('./routes/auth.routes'))

const PORT = config.get('port') || 3000

async function start() {
  try {
    await mongoose.connect(config.get('mongoURI'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })

    app.listen(PORT, () => {
      console.log(`Server started on port: ${PORT}...`)
    })
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

start()