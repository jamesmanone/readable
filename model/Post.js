const { Schema, Model, ObjectId } = require('./relational-json-db');

class PostSchema extends Schema {
  constructor(data) {
    super(data);
    this.title = data.title;
    this.body = data.body;
    this.author = data.author;
    if(data.category && typeof data.categoty == 'object')
      this.category = new ObjectId('Category', data.category.id);
    else if(data.category && typeof data.category == 'string')
      this.category = new ObjectId('Category', data.category);
    this.voteScore = data.voteScore || 0;
    this.comments = data.comments || [];
    this.addComment = this.addComment.bind(this);
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
  }
  addComment(comment) {
    comment.post = this;
    const Comment = this.model.DB.getOne('Comment');
    return new Promise((resolve, reject) => {
      Comment.create(comment, true)
        .then(newComment => this.comments.push(new ObjectId('Comment', newComment.id)))
        .then(() => this.save())
        .then(resolve, reject);
    });
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

const Post = module.exports = new Model('Post', PostSchema);

module.exports.findByCategory = category => {
  category = new ObjectId('Category', category);
  return Post.find({category}).exec();
}
