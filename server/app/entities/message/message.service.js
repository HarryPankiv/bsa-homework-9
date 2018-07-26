const messageRepository = require('./message.repository');

class MessageService {
	getAllMessages() {
		return messageRepository.findAll();
	}

	getMessageById(id) {
		return messageRepository.findById(id);
	}

	addMessage(message) {
		return messageRepository.add(message);
	}

	updateMessage(id, message) {
		return messageRepository.update({ _id: id }, message);
	}

	deleteMessage(id) {
		return messageRepository.delete({ _id: id });
	}
}

module.exports = new MessageService();