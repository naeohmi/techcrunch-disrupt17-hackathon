/* setting up express */
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

/* this will get our environment variables in our .env file */
require('dotenv').config();

// const postRoutes = require('./controllers/postsController');
// const authRoutes = require('./routes/auth');
// const userRoutes = require('./con/users')

const app = express();

/* importing routes */
const postRoutes = require('./routes/index');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users')

/* setting up port & listen */
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});

/* setting up views */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

/* setting static file */
app.use('/static', express.static(path.join(__dirname, 'public')));
/* setting up logger */
app.use(logger('dev'));
app.use(cookieParser());
/* setting up body parser */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

/* setting routes */
app.get('/', function(req, res) {
  res.render('index', {
    message: 'Hello World!',
    documentTitle: 'Ada posts!!',
    subTitle: 'Read some of the coolest posts around.',
    showMore: true,
    postAuthors: [
      'Unknown',
      'Yoda',
      'CS Lewis',
      'Frank Chimero',
      'Pablo Picasso',
      'Italo Calvino',
      'T. S. Eliot',
      'Samuel Beckett',
      'Hunter S. Thompson',
    ],
  });
});

app.use('/posts', postRoutes);
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/* handling 404 */
app.get('*', function(req, res) {
  res.status(404).send({ message: 'Oops! Not found.' });
});
