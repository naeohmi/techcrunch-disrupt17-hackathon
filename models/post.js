const db = require('../db/config');

const Post = {};

Post.findAll = () => {
  return db.query('SELECT * FROM posts ORDER BY id ASC');
};

Post.findById = id => {
  return db.oneOrNone('SELECT * FROM posts WHERE id = $1', [id]);
};

Post.create = post => {
  return db.one(
    `
      INSERT INTO posts
      (title, content, author)
      VALUES ($1, $2, $3) RETURNING *
    `,
    [post.title, post.content, post.author]
  );
};

Post.update = (post, id) => {
  return db.none(
    `
      UPDATE posts SET
      title = $1,
      content = $2,
      author = $3
      WHERE id = $4
    `,
    [post.title, post.content, post.author, id]
  );
};

Post.destroy = id => {
  return db.none(
    `
      DELETE FROM posts
      WHERE id = $1
    `,
    [id]
  );
};

module.exports = Post;
