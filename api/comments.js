const { Comment, Post,  } = require('../model');

const defaultData = [
  {
    createdAt: 1468166872634,
    post: 'shcy10293',
    body: 'Hi there! I am a COMMENT.',
    author: 'thingtwo',
    voteScore: 6,
  },
  {
    createdAt: 1469479767190,
    post: 'kel3829sk',
    body: 'Comments. Are. Cool.',
    author: 'thingone',
    voteScore: -5,
  }
];

const getByParent = postId => {
  return Comment.findByPost(postId)
}

const get = id => {
  return Comment.findById(id);
}

const add = comment => {
  return Post.findById(comment.post)
    .then(post => post.addComment(comment))
    .then(post => post.populate('comments'));
}

const vote = (id, option) => {
  return Comment.findById(id)
    .then(comment => {
      if(option === 'upVote') comment.upVote(true);
      else comment.downVote(true);
      return comment;
    })
    .then(comment => Post.findById(comment.post.id))
    .then(post => post.populate('comments'));
}

const disableByParent = (token, post) => {
    return Comment.clearCommentsFromPost(post);
}

const disable = id => {
  return Comment.findById(id)
    .then(comment => Post.findById(comment.post.id))
    .then(post => post.removeComment(id));
}

const edit = (id, update) => {
  return Comment.findById(id)
    .then(comment => {
      if(update.body && update.body !== comment.body)
        comment.body = update.body;
      return comment.save();
    });
}

module.exports = {
  get,
  getByParent,
  add,
  vote,
  disableByParent,
  disable,
  edit,
  defaultData
}
