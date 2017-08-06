const axios = require('axios');

// Make random token using string to Base64
const makeToken = () => {
  let token = btoa((Math.random()*1000*1000).toString());
  localStorage.setItem('token', token);
  return token;
};

const token = localStorage.getItem('token') || makeToken();


const config = {
  headers: {
    Authorization: token
  }
};

export const getCategories = () => {
  return axios.get('/api/categories', config)
    .then(res => res.data);
};

export const newCategory = category => {
  return axios.post('api/categories', category, config)
    .then(res => res.data);
};

export const getPostsByCategory = category => {
  return axios.get(`/api/${category}/posts`, config)
    .then(res => res.data);
};

export const getAll = () => {
  return axios.get('/api/posts', config)
    .then(res => res.data);
};

export const getPost = postId => {
  return axios.get(`/api/posts/${postId}`, config)
    .then(res => res.data);
};

export const makePost = post => {
  return axios.post('/api/posts', post, config)
    .then(res => res.data);
};

export const deletePost = postId => {
  return axios.delete(`/api/posts/${postId}`, config)
    .then(res => res.data);
};

export const upVote = postId => {
  return axios.post(`/api/posts/${postId}`,
                    {option:upVote},
                    config)
    .then(res => res.data);
};

export const downVote = postId => {
  return axios.post(`/api/posts/${postId}`,
                    {option:downVote},
                    config)
    .then(res => res.data);
};

export const editPost = post => {
  return axios.put(`/api/posts/${post.id}`,
                   post,
                   config)
    .then(res => res.data);
};

export const getComments = postId => {
  return axios.get(`/api/posts/${postId}/comments`, config)
    .then(res => res.data);
};

export const addComment = comment => {
  return axios.post('/api/comments', comment, config)
    .then(res => res.data);
};

export const editComment = comment => {
  return axios.put(`/api/comments/${comment.id}`,
                   comment,
                   config)
    .then(res => res.data);
};

export const deleteComment = commentId => {
  return axios.delete(`/api/comments/${commentId}`, config)
    .then(res => res.data);
};
