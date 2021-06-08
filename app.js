const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { error400Middleware, error404Middleware } = require('./middlewares/error');
const mongo = require('./mongo');

const port = process.env.PORT || 3003;
const app = express();

const db = mongo();

app.use(cors());
app.use(error400Middleware);
app.use(express.json());
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
  console.log(`Express has started on port ${port}!`);
});
