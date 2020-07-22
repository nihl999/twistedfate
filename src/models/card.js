const Mongoose = require('mongoose');

const CardSchema = new Mongoose.Schema({
    question:  {
        type: String,
        required: true,
    },
    responses: [{
        type: Object,
        required: true,
    }],
    subject: {
        type: String,
        required: true,
    },
    author: String
})
module.exports = CardSchema;
