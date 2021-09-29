const express = require('express');
const router = express.Router();
const checkAuth = require('../middlewares/checkAuth')
const banConroller = require('../controllers/banned-contoller')


router.get('/', banConroller.getBans)
router.post('/', checkAuth, banConroller.addBan)
router.delete('/:id', checkAuth, banConroller.getBan)


module.exports = router