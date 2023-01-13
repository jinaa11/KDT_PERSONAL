const express = require('express');
const router = express.Router();

const users = require('../controllers/users');

router.post('/', users.create);
// create >> post
// read >> get
// update >> put
// delete >> delete

module.exports = router;