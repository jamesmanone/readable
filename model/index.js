const { DB } = require('./relational-json-db');
const Comment = require('./Comment');
const Post = require('./Post');
const Category = require('./Category');
const chalk = require('chalk');

new DB([Comment, Post, Category]);

// Populate DB if empty
Category.find().exec()
  .catch(() => {
    console.log(chalk.yellow.bold('Populating Demo Categories Database'));
    const { defaultData } = require('../api/categories');
    defaultData.map(item => {
      Category.create(item, true);
    });
  });

Post.find().exec()
  .catch(() => {
    console.log(chalk.yellow.bold('Populating Demo Posts Database'));
    const { defaultData } = require('../api/posts');
    Promise.all(defaultData.map(item => {
      Post.create(item, true);
    }))
    .then(() => {
      console.log(chalk.yellow.bold('Populating Demo Comments Database'));
      const { defaultData } = require('../api/comments');
      defaultData.map(item =>
        Post.findById(item.post).then(post => post.addComment(item))
      );
    });
  });


module.exports = {Comment, Post, Category};
