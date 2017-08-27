const { Schema, Model, ObjectId } = require('./relational-json-db');

class PostSchema extends Schema {
  constructor(data) {
    super(data);
    this.title = data.title;
    this.body = data.body;
    this.author = data.author;
    this.category = new ObjectId('Category', data.category);
    this.voteScore = data.voteScore === undefined ? 1 : data.voteScore;
    this.comments = data.comments || [];
    this.addComment = this.addComment.bind(this);
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
    this.removeComment = this.removeComment.bind(this);
    this.save = this.save.bind(this);
  }
  addComment(comment) {
    comment.post = this;
    const Comment = this.model.DB.getOne('Comment');
    return new Promise((resolve, reject) => {
      Comment.create(comment, true)
        .then(newComment => this.comments.push(new ObjectId('Comment', newComment)))
        .then(() => this.save())
        .then(resolve, reject);
    });
  }
  removeComment(id) {
    return new Promise((resolve, reject) => {
      const Comment = this.model.DB.getOne('Comment');
      const comment = Comment.findByIdSync(id);
      if(comment.post.id !== this.id) throw validationError;
      this.comments = this.comments.filter(comment => comment.id !== id);
      comment.remove();
      this.save();
      resolve(this);
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
  save() {
    this.comments = this.comments.map(comment => new ObjectId('Comment', comment));
    this.model.save(this);
    return this;
  }
}

const Post = module.exports = new Model('Post', PostSchema);

module.exports.findByCategory = category => {
  category = new ObjectId('Category', category);
  return Post.find({category}).exec();
}
