const Repository = require('../../common/Repository');
const MessageModel = require('./message.schema');

class MessageRepository extends Repository {
	constructor() {
		super();
		this.model = MessageModel;
	}
}

module.exports = new MessageRepository();
