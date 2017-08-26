export default {
  posts: {
    posts: [],
    fetching: false,
    orderBy: {
      votes: true,
      date: false
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
  alerts: [],
  comment: {
    comment: '',
    author: ''
  },
  editPost: {
    post: {
      title: '',
      body: '',
      author: '',
      category: '',
      id: ''
    }
  }
};
