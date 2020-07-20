const express = require('express');
const cardController = require('./controllers/cardController')

const router = express.Router();

router.get('/:subject/cards/', cardController.index)
router.post('/:subject/cards/newcard', cardController.create)

module.exports = router;
