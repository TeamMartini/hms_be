const jwt = require('jsonwebtoken');
const User = require('../../../models/user');

exports.register = (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  let newUser = null;

  const create = (user) => {
    if (user) {
      throw new Error('username exists');
    } else {
      return User.create(username, password);
    }
  };

  const count = (user) => {
    newUser = user;
    return User.countDocuments({}).exec();
  };

  const assign = (userCount) => {
    if (userCount === 1) {
      return newUser.assignAdmin();
    }
    return Promise.resolve(false);
  };

  const respond = ({ admin }) => {
    res.json({
      message: 'registered successfully',
      admin,
      username,
    });
  };

  const onError = (error) => {
    res.json({
      code: 409,
      message: error.message,
    });
  };

  console.log(username, password, User.findOneByUsername(username));
  User.findOneByUsername(username).then(create).then(count).then(assign)
    .then(respond)
    .catch(onError);
};

exports.login = (req, res) => {
  console.log(req.headers);
  const { username, password } = req.body;
  const secret = req.app.get('jwt-secret');
  const check = (user) => {
    if (!user) {
      throw new Error('login failed');
    } else {
      if (user.verify(password)) {
        return new Promise((resolve, reject) => {
          jwt.sign(
            {
              _id: user._id,
              username: user.username,
              admin: user.admin,
            },
            secret,
            {
              expiresIn: '3d',
              issuer: 'localhost',
              subject: 'userInfo',
            },
            (err, token) => {
              if (err) reject(err);
              resolve(token);
            },
          );
        });
      }
      throw new Error('login failed');
    }
  };

  const respond = (token) => {
    res.json({
      message: 'logged in successfully',
      token,
    });
  };

  const onError = (error) => {
    res.json({
      code: 403,
      message: error.message,
    });
  };

  User.findOneByUsername(username).then(check).then(respond).catch(onError);
};

exports.check = (req, res) => {
  res.json({
    success: true,
    info: req.decoded,
  });
};
