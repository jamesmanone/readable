import * as types from '../actions/actionTypes';
import initialState from '../store/initialState';

export default (state=initialState.activePost, action) => {
  switch (action.type) {
    case types.FETCH_POST_PENDING:
      return {...state, post: action.payload, fetching: true};
    case types.FETCH_POST_FULFILLED:
      return {...state, post: action.payload, fetching: false};
    case types.FETCH_POST_REJECTED:
      return {...state, fetching: false};
    case types.POST_DOWNVOTE:
      if(state.post.id === action.payload.id) {
        return {
          ...state,
          post: {
            ...state.post,
            voteScore: action.payload.voteScore
          }
        };
      } else {
        return state;
      }
    case types.POST_UPVOTE:
      if(state.post.id === action.payload.id) {
        return {
          ...state,
          post: {
            ...state.post,
            voteScore: action.payload.voteScore
          }
        };
      } else {
        return state;
      }
    case types.SUBMIT_COMMENT_FULFILLED:
      if(state.post.id === action.payload.id) {
        return {
          ...state,
          post: action.payload
        };
      } else {
        return state;
      }
    case types.UPVOTE_COMMENT_FULLFILLED:
      if(state.post.id === action.payload.id) {
        return {
          ...state,
          post: action.payload
        };
      } else {
        return state;
      }
    case types.DOWNVOTE_COMMENT_FULLFILLED:
      if(state.post.id === action.payload.id) {
        return {
          ...state,
          post: action.payload
        };
      } else {
        return state;
      }
    case types.DELETE_COMMENT_FULFILLED:
      return {
        ...state,
        post: {
          ...state.post,
          comments: state.post.comments.filter(comment => comment.id !== action.payload)
        }
      };
    default:
      return state;
  }
};
