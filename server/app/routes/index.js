const message = require('../entities/message/message.routes');

module.exports = app => {
	app.use('/api/messages', message);
};
