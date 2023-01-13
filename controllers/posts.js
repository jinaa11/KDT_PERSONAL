const Post = require('../models/Post');

module.exports.create = async(req, res) => {
    try {
        const {postId, title, content, imgUrl, author} = req.body;

        const post = new Post( {postId, title, content, imgUrl, author});
        await post.save()

        return res.send(post);
    } catch(err) {
        return res.status(500).json({message: err.message});
    }

};