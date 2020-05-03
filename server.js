const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const webpack = require('webpack');
const history = require('connect-history-api-fallback')
const bodyParser = require('body-parser')

const app = express()
const webpackConfig = require('./webpack.config.js');
const compiler = webpack(webpackConfig);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/todo', require('./routes/todo.routes'))
// app.use(express.static(path.resolve(__dirname, 'client', 'public')))
app.use(history())

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
}));
app.use(require("webpack-hot-middleware")(compiler));

const PORT = config.get('port') || 3000

async function start() {
  try {
    await mongoose.connect(config.get('mongoURI'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })

    app.listen(PORT, () => {
      console.log(`Server started on port: ${PORT}...`)
    })
  } catch (e) {
    console.log('Server Error', e.message)
    mongoose.disconnect()
    process.exit(1)
  }
}

start()