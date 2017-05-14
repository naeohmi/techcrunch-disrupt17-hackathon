const config = require('./config.js')

const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
  res.render('auth/log-in', {
    documentTitle: 'Helperbee login',
  });
});

router.get('/register', (req, res) => {
  res.render('auth/register', {
    documentTitle: 'Helperbee registration',
  });
});

router.post('/register', config.controller.create);
router.post(
  '/login',
  config.passport.authenticate('local', {
    successRedirect: '/user',
    failureRedirect: '/auth/login',
    failureFlash: false,
  })
);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;