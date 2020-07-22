const mongoose = require('mongoose');
const CardSchema = require('../models/card');

const card = mongoose.model('Card', CardSchema);

module.exports = {
    async index(req, res){
        await card.create();
        const cards = await card.find();
        return res.json(cards);
    },
    async create(req, res){
        const { question, responses, author } = req.body;
        const subject = req.params.subject;

        const creating = await card.create({ question, responses, author, subject });
        return res.json(creating);
    },
    async showBySubject(req, res){
        const subject = req.params.subject;
        const cards = await card.find({subject});
        return res.json(cards);
    },
    async destroy(req, res){
        const card_id = req.params.id;
        const deletedCard = await card.findByIdAndDelete(card_id);
        return res.json(deletedCard);
    }
};
