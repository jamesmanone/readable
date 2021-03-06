const express = require('express');
const bodyParser = require('body-parser');
const categories = require('./categories');
const posts = require('./posts');
const comments = require('./comments');

const router = express.Router();

router.use((req, res, next) => {
  const token = req.get('Authorization');

  if (token) {
    req.token = token;
    next();
  } else {
    res.status(403).send({
      error: 'Please provide an Authorization header to identify yourself (can be whatever you want)'
    });
  }
});

router.get('/categories', (req, res) => {
  categories.getAll()
    .then(
      (data) => res.send(data),
      (error) => {
        res.status(500).send({
          error: 'There was an error.'
        });
      }
    );
});

router.post('/categories', bodyParser.json(), (req, res) => {
  categories.newCategory(req.body)
    .then(
      (data) => res.send(data),
      (error) => {
        res.status(500).send({
          error: 'There was an error'
        });
      }
    );
});

router.get('/:category/posts', (req, res) => {
  posts.getByCategory(req.params.category)
    .then(
      (data) => res.send(data),
      (error) => {
        res.status(500).send({
          error: 'There was an error.'
        });
      }
    );
});

router.get('/posts', (req, res) => {
  posts.getAll()
    .then(
      (data) => res.send(data),
      (error) => {
        res.status(500).send({
         error: 'There was an error.'
       });
      }
    );
});

router.post('/posts', bodyParser.json(), (req, res) => {
  posts.add(req.body)
    .then(
      (data) => res.send(data),
      (error) => {
        console.log(error);
        res.status(500).send({
         error: 'There was an error.'
       });
      }
    );
});

router.get('/posts/:id', (req, res) => {
  posts.get(req.params.id)
    .then(
      (data) => {
        res.send(data[0]);
      },
      (error) => {
        res.status(500).send({
          error: 'There was an error.'
        });
      }
    );
});

router.delete('/posts/:id', (req, res) => {
  posts.disable(req.params.id)
    .then(success => res.json({success}));
});

router.post('/posts/:id', bodyParser.json(), (req, res) => {
  const { option } = req.body;
  const id = req.params.id;
  posts.vote(id, option)
    .then(
      (data) => res.send(data),
      (error) => {
        res.status(500).send({
          error: 'There was an error.'
        });
      }
    );
});

router.put('/posts/:id', bodyParser.json(), (req, res) => {
  posts.edit(req.params.id, req.body)
    .then(
      (data) => res.send(data),
      (error) => {
        res.status(500).send({
          error: 'There was an error.'
        });
      }
    );
});

router.get('/posts/:id/comments', (req, res) => {
  comments.getByParent(req.params.id)
    .then(
      (data) => res.send(data),
      (error) => {
        res.status(500).send({
          error: 'There was an error.'
        });
      }
    );
});

router.get('/comments/:id', (req, res) => {
  comments.get(req.params.id)
    .then(
      (data) => res.send(data),
      (error) => {
        res.status(500).send({
          error: 'There was an error.'
        });
      }
    );
});

router.put('/comments/:id', bodyParser.json(), (req, res) => {
  comments.edit(req.params.id, req.body)
    .then(
      (data) => res.send(data),
      (error) => {
        res.status(500).send({
          error: 'There was an error.'
        });
      }
    );
});

router.post('/comments', bodyParser.json(), (req, res) => {
  comments.add(req.body)
    .then(
      (data) => res.send(data),
      (error) => {
        res.status(500).send({
          error: 'There was an error.'
        });
      }
    );
});

router.post('/comments/:id', bodyParser.json(), (req, res) => {
  const { option } = req.body;
  const { id } = req.params;
  comments.vote(req.params.id, option)
    .then(
      (data) => res.send(data),
      (error) => {
        res.status(500).send({
          error: 'There was an error.'
        });
      }
    );
});

router.delete('/comments/:id', (req, res) => {
  comments.disable(req.params.id)
    .then(
      (data) => res.send(data),
      (error) => {
        res.status(500).send({
          error: 'There was an error.'
        });
      }
    );
});


module.exports = router;
