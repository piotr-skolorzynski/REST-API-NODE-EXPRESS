const express = require('express');
const feedContoller = require('../controllers/feed-controllers');

const router = express.Router();

//GET /feed/posts
router.get('/posts', feedContoller.getPosts);

//POST /feed/post
router.post('/post', feedContoller.createPost);

module.exports = router;