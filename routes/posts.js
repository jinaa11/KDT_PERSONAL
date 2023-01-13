const express = require('express');
const router = express.Router();

const posts = require('../controllers/posts');

router.post('/', posts.create);
module.exports = router;