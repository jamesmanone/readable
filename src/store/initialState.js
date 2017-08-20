export default {
  posts: {
    posts: [],
    fetching: false,
    orderBy: {
      votes: false,
      date: true
    }
  },
  activePost: {
    post: {},
    fetching: false
  },
  postForm: {
    title: '',
    body: '',
    author: '',
    category: '',
  },
  categories: {
    categories:[],
    fetching: false
  },
  alerts: []
};
