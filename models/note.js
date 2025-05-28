const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    Note: { type: String, required: true },
    User: { type: String, required: true },
    Created_on: { type: Date, default: Date.now },
    Update_on: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Note', noteSchema);
