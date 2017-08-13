export default {
  posts: {
    posts: [],
    fetching: false,
    orderBy: {
      votes: false,
      date: true
    }
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
  }
};
