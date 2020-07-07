// Dependencies
const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

// Schema Definition
// https://mongoosejs.com/docs/schematypes.html
const dataSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    number: { type: Number, required: true },
}, { timestamps: true }); // createdAt, updatedAt
// https://mongoosejs.com/docs/guide.html#timestamps

// https://www.npmjs.com/package/mongoose-auto-increment
autoIncrement.initialize(mongoose.connection);
dataSchema.plugin(autoIncrement.plugin, {
    model: 'Data',
    startAt: 1,
}); // _id

// Export Model
module.exports = mongoose.model('Data', dataSchema);
