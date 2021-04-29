const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const { error400Middleware, error404Middleware } = require('./middlewares/error');

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(error400Middleware);
app.use(express.urlencoded({
  extended: true,
}));
app.use(morgan('dev'));
app.set('jwt-secret', 'SECRETCODE');

app.get('/', (req, res) => {
  res.send('HELLO JWT');
});

app.use('/api', require('./routes/api'));

app.use(error404Middleware);

const server = app.listen(port, () => {
  console.log('Express has started on port 3000!');
});

mongoose.connect(process.env.HMS_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => {
  console.log('mongodb connected');
});
