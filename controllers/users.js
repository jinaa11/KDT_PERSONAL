const User = require('../models/User');

// Create a new user
module.exports.create = async(req, res) => {
    try {
        const {userId, name, email, password} = req.body;
        const user = new User({userId, name, email, password});
        await user.save()

        return res.send(user);
    } catch(err) {
        return res.status(500).json({message: err.message});
    }
};