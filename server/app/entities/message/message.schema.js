const mongoose = require('mongoose');

const Message = new mongoose.Schema({
	text: String,
	createdAt: String,
	updatedAt: String
}, {
	versionKey: false
});

module.exports = mongoose.model('Message', Message);
