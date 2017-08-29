const { Post } = require('../model');

const defaultData = [
  {
    id: 'shcy10293',
    createdAt: 1467166872634,
    title: 'Udacity is the best place to learn React',
    body: 'Everyone says so after all.',
    author: 'thingtwo',
    category: 'mwofm40sl',
    voteScore: 6,
  },
  {
    id: 'kel3829sk',
    createdAt: 1468479767190,
    title: 'Learn Redux in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'thingone',
    category: 'kd92kdmcj',
    voteScore: -5,
  }
];

const getByCategory = category => {
  return Post.findByCategory(category)
};

const get = id => {
  return Post.find({id}).populate('comments').exec();
};

const getAll = () => {
  return Post.find().exec();
};

const add = post => {
  return Post.create(post, true);
};

const vote = (id, option) => {
  return Post.findById(id)
    .then(post => {
      if(option === 'upVote') post.upVote(true);
      else post.downVote(true);
      return post;
    });
};

const disable = id => {
  return Post.findById(id)
    .then(post => {
      post.populate('comments');
      post.comments.map(comment => {
        comment.remove()
      });
      post.remove();
      return true;
    });
};

const edit = (id, update) => {
  return Post.findById(id)
    .then(post => {
      if(update.body && update.body !== post.body)
        post.body = update.body;
      if(update.title && update.title !== post.title)
        post.title = update.title;
      if(update.author && update.author !== post.author)
        post.author = update.author;
      if(update.category && update.category.id !== post.category.id)
        post.category.id = update.category.id;
      return post.save();
    })
    .then(post => post.populate('comments'));
};

module.exports = {
  get,
  getAll,
  getByCategory,
  add,
  vote,
  disable,
  edit,
  defaultData
};
