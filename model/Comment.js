const { Schema, Model, ObjectId } = require('./relational-json-db');

class CommentSchema extends Schema {
  constructor(data) {
    super(data);
    this.body = data.body;
    this.author = data.author;
    this.voteScore = data.voteScore === undefined ? 1 : data.voteScore;
    this.post = typeof data.post === 'string' ?
      new ObjectId('Post', data.post) :
      new ObjectId('Post', data.post.id);
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
  }
  upVote(auto) {
    this.voteScore++;
    if(auto) this.save();
  }
  downVote(auto) {
    this.voteScore--;
    if(auto) this.save();
  }
}

const Comment = module.exports = new Model('Comment', CommentSchema);

module.exports.clearCommentsFromPost = postId => {
  return new Promise((resolve, reject) => {
    Comment.find({post: {model: 'Post', id: postId}}).exec()
      .then(comments => {
        let promises = comments.map(comment => comment.remove());
        return Promise.all(promises);
      })
      .then(resolve, reject);
  });
}

module.exports.findByPost = id => {
  id = new ObjectId('Post', id)
  return Comment.find({post: id}).exec();
}
