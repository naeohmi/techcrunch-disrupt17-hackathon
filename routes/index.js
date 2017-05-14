const postRoutes = express.Router();
const controller = require('../controllers/postsController');
const authHelpers = require('../services/auth/authHelpers');

postRoutes.get('/', controller.index);
postRoutes.get('/add', authHelpers.loginRequired, (req, res) => {
  res.render('posts/posts-add', {
    documentTitle: 'Adapost!',
  });

postRoutes.get('/edit/:id', authHelpers.loginRequired, controller.edit);
postRoutes.get('/:id', controller.show);
postRoutes.post('/', authHelpers.loginRequired, controller.create);
postRoutes.put('/:id', authHelpers.loginRequired, controller.update);
postRoutes.delete('/:id', authHelpers.loginRequired, controller.destroy);


module.exports = postRoutes;