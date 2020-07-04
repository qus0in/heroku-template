// Dependencies
const mongoose = require('mongoose');

// Schema Definition
// https://mongoosejs.com/docs/schematypes.html
const dataSchema = new mongoose.Schema({
    name: { type: String, required: true },
    number: { type: Number, required: true },
}, { timestamps: true }); // createdAt, updatedAt
// https://mongoosejs.com/docs/guide.html#timestamps

// Export Model
module.exports = mongoose.model('Data', dataSchema);