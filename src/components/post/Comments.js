import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import {
  changeComment,
  changeAuthor,
  setComment,
  cancelEditComment,
  submitEditComment
} from '../../actions/editCommentActions';
import {
  upVoteComment,
  downVoteComment,
  deleteComment
} from '../../actions/commentActions';
import Comment from './Comment';
import EditComment from './EditComment';


class Comments extends Component {
  static propTypes = {
    comments: PropTypes.array,
    editComment: PropTypes.object.isRequired,
    upVoteComment: PropTypes.func.isRequired,
    downVoteComment: PropTypes.func.isRequired,
    deleteComment: PropTypes.func.isRequired,
    changeComment: PropTypes.func.isRequired,
    changeAuthor: PropTypes.func.isRequired,
    setComment: PropTypes.func.isRequired,
    cancelEditComment: PropTypes.func.isRequired,
    submitEditComment: PropTypes.func.isRequired
  }

  onUpVote = comment => this.props.upVoteComment(comment)

  onDownVote = comment => this.props.downVoteComment(comment)

  onDeleteComment = comment => this.props.deleteComment(comment)

  onChangeComment = evt => this.props.changeComment(evt.target.value)

  onChangeAuthor = evt => this.props.changeAuthor(evt.target.value)

  onEdit = comment => this.props.setComment(comment)

  onCancelEdit = () => this.props.cancelEditComment()

  onSubmitComment = evt => {
    evt.preventDefault();
    this.props.submitEditComment();
  }

  render() {
    return (
      <ListGroup>
        {this.props.comments && this.props.comments.map(comment => {
          if(comment.editing)
            return (<EditComment key={comment.id}
                                 comment={this.props.editComment}
                                 onChangeComment={this.onChangeComment}
                                 onChangeAuthor={this.onChangeAuthor}
                                 onCancelEdit={this.onCancelEdit}
                                 onSubmitComment={this.onSubmitComment} />);
          else return (<Comment key={comment.id}
                                comment={comment}
                                onUpVote={this.onUpVote}
                                onDownVote={this.onDownVote}
                                onDeleteComment={this.onDeleteComment}
                                onEdit={this.onEdit} />);
        })}
      </ListGroup>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.activePost.post.comments,
    editComment: state.editComment.comment
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    upVoteComment,
    downVoteComment,
    deleteComment,
    changeComment,
    changeAuthor,
    setComment,
    cancelEditComment,
    submitEditComment
  }, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Comments);
