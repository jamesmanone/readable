import * as types from '../actions/actionTypes';
import initialState from '../store/initialState';

const byDate = (a, b) => {
  return b.createdAt - a.createdAt;
};

const byVotes = (a, b) => {
  return b.voteScore - a.voteScore;
};

export default (state=initialState.posts, action) => {
  switch (action.type) {
    case types.FETCH_POSTS_PENDING:
      return {...state, fetching: true};
    case types.FETCH_POSTS_FULFILLED:
      return {...state, posts: action.payload, fetching: false};
    case types.SUBMIT_POST_FULFILLED:
      return {...state, posts: [...state.posts, action.payload]};
    case types.ORDER_POSTS_BY_DATE:
      return {
        ...state,
        posts: [...state.posts].sort(byDate),
        orderBy: {
          votes: false,
          date: true
        }
      };
    case types.ORDER_POSTS_BY_VOTES:
      return {
        ...state,
        posts: [...state.posts].sort(byVotes),
        orderBy: {
          votes: true,
          date: false
        }
      };
    case types.POST_UPVOTE:
      return {
        ...state,
        posts: [
          ...state.posts.filter(post => post.id !== action.payload.id),
          action.payload
        ]
      };
    case types.POST_DOWNVOTE:
      return {
        ...state,
        posts: [
          ...state.posts.filter(post => post.id !== action.payload.id),
          action.payload
        ]
      };
    case types.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload)
      };
    case types.UPVOTE_COMMENT_FULLFILLED:
      return {
        ...state,
        posts: state.posts
          .filter(post => post.id !== action.payload.id)
          .concat([action.payload])
      };
    case types.DOWNVOTE_COMMENT_FULLFILLED:
      return {
        ...state,
        posts: state.posts
          .filter(post => post.id !== action.payload.id)
          .concat([action.payload])
      };
    default:
      return state;
  }
};
