const mongoose = require('mongoose');
const User = require('./User');

const postSchema = new mongoose.Schema({
    postId: Number,
    title: String,
    content: String,
    imgUrl: String,
    author: String
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;