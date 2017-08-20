const { DB } = require('./relational-json-db');
const Comment = require('./Comment');
const Post = require('./Post');
const Category = require('./Category');

new DB([Comment, Post, Category]);

// Populate DB if empty
Category.find().exec()
  .catch(() => {
    const { defaultData } = require('../api/categories');
    defaultData.map(item => {
      Category.create(item, true);
    });
  });

Post.find().exec()
  .catch(() => {
    const { defaultData } = require('../api/posts');
    Promise.all(defaultData.map(item => {
      Post.create(item, true);
    }))
    .then(() => {
      const { defaultData } = require('../api/comments');
      defaultData.map(item =>
        Post.findById(item.post).then(post => post.addComment(item))
      );
    });
  });


module.exports = {Comment, Post, Category};
