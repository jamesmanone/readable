import * as types from '../actions/actionTypes';

const byDate = (a, b) => {
  return b.createdAt - a.createdAt;
};

const byVotes = (a, b) => {
  return b.voteScore - a.voteScore;
};

export default (state={}, action) => {
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
    default:
      return state;
  }
};
