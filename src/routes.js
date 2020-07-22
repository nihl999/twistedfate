const express = require('express');
const cardController = require('./controllers/cardController')

const router = express.Router();

router.get('/cards/', cardController.index)
router.post('/:subject/cards/', cardController.create)
router.get('/:subject/cards/', cardController.showBySubject)
router.delete('/cards/:id', cardController.destroy)

module.exports = router;
