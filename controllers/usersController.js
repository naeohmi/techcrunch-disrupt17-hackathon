const bcrypt = require('bcryptjs');
const user = require('../models/user');

const controller = {};

controller.create = (req, res, next) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);

  user.create({
    username: req.body.username,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: hash,
  })
    .then(user => {
      req.login(user, err => {
        if (err) return next(err);
        res.redirect('/user');
      });
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

module.exports = controller;

///////.  include cookie-parser to store user info
