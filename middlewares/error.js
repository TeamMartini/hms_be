const error400Middleware = (error, req, res, next) => {
  console.error('400 error occured');
  console.error(error);
  res.status(400).json({
    message: 'invalid request.',
  });
};

const error404Middleware = (req, res, next) => {
  const url = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
  console.error('404 error occured');
  console.error(url);
  res.status(404).json({
    message: 'page not found.',
  });
};

module.exports = { error400Middleware, error404Middleware };
