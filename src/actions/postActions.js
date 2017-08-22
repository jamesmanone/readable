import * as types from './actionTypes';
import * as api from '../api';
import store from '../store';

const resetOrder = dispatch => {
  const order = store.getState().posts.orderBy;
  if(order.votes) orderByVotes()(dispatch);
  else if(order.date) orderByDate()(dispatch);
};

export const getAllPosts = () => {
  return dispatch => {
    dispatch({type: types.FETCH_POSTS_PENDING});
    api.getAll()
      .then(res => {
        dispatch({
                      type: types.FETCH_POSTS_FULFILLED,
                      payload: res
                    });
        resetOrder(dispatch);
      })
      .catch(e => dispatch({type: types.FETCH_POSTS_REJECTED}));
  };
};

export const orderByDate = () => {
  return dispatch => {
    dispatch({type: types.ORDER_POSTS_BY_DATE});
  };
};

export const orderByVotes = () => {
  return dispatch => {
    dispatch({type: types.ORDER_POSTS_BY_VOTES});
  };
};

export const downVote = postId => {
  return dispatch => {
    api.downVote(postId)
      .then(res => {
        dispatch({type: types.POST_DOWNVOTE, payload: res});
        resetOrder(dispatch);
      });
  };
};

export const upVote = postId => {
  return dispatch => {
    api.upVote(postId)
      .then(res => {
        dispatch({type: types.POST_UPVOTE, payload: res});
        resetOrder(dispatch);
      });
  };
};

export const deletePost = postId => {
  return dispatch => {
    api.deletePost(postId)
      .then(() => {
        dispatch({type: types.DELETE_POST, payload: postId});
        resetOrder(dispatch);
      });
  };
};
