const Post = require('../models/post');

const controller = {};

controller.index = (req, res) => {
  Post.findAll()
    .then(posts => {
      res.render('posts/posts-index', {
        documentTitle: 'helperbee',
        postsData: posts,
      });
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

controller.show = (req, res) => {
  Post.findById(req.params.id)
    .then(post => {
      res.render('posts/posts-single', {
        documentTitle: 'helperbee',
        post: post,
      });
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

controller.create = (req, res) => {
  Post.create({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
  })
    .then(post => {
      res.redirect('/posts');
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

controller.edit = (req, res) => {
  Post.findById(req.params.id)
    .then(post => {
      res.render('posts/posts-edit', {
        documentTitle: 'helperbee',
        post: post,
        id: req.params.id,
      });
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

controller.update = (req, res) => {
  Post.update(
    {
      title: req.body.title,
      content: req.body.content,
      author: req.body.author,
    },
    req.params.id
  )
    .then(post => {
      res.redirect('/posts');
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

controller.destroy = (req, res) => {
  Post.destroy(req.params.id)
    .then(() => {
      res.redirect('/posts');
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

module.exports = controller;