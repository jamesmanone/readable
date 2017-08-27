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
      if(state.post.id === action.payload.post.id) {
        return {
          ...state,
          post: {
            ...state.post,
            comments: state.post.comments
                        .filter(comment => comment.id !== action.payload.id)
                        .concat([action.payload])
                        .sort((a, b) => a.createdAt - b.createdAt)
          }
        };
      } else {
        return state;
      }
    case types.DOWNVOTE_COMMENT_FULLFILLED:
      if(state.post.id === action.payload.post.id) {
        return {
          ...state,
          post: {
            ...state.post,
            comments: state.post.comments
                        .filter(comment => comment.id !== action.payload.id)
                        .concat([action.payload])
                        .sort((a, b) => a.createdAt - b.createdAt)
          }
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
    case types.EDIT_COMMENT_SET_COMMENT:
      if(action.payload.post.id !== state.post.id) return state;
      return {
        ...state,
        post: {
          ...state.post,
          comments: state.post.comments
                      .filter(item => item.id !== action.payload.id)
                      .concat([{...action.payload, editing: true}])
                      .sort((a, b) => a.createdAt - b.createdAt)
        }
      };
    case types.EDIT_COMMENT_CANCELED:
      return {
        ...state,
        post: {
          ...state.post,
          comments: state.post.comments.map(comment => {
            if(comment.hasOwnProperty('editing')) delete comment.editing;
            return comment;
          })
        }
      };
    case types.EDIT_COMMENT_SUBMIT_FULFILLED:
      if(state.post.id !== action.payload.post.id) return state;
      return {
        ...state,
        post: {
          ...state.post,
          comments: state.post.comments
                      .filter(comment => comment.id !== action.payload.id)
                      .concat([action.payload])
                      .sort((a, b) => a.createdAt - b.createdAt)
        }
      };
    default:
      return state;
  }
};
