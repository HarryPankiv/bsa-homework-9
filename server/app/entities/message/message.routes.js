const express = require('express');
const message = express.Router();
const messageService = require('./message.service');

message.route('/')
	.get((req, res) => {
		messageService.getAllMessages()
			.then(messages => {
				res.send(messages);
			})
			.catch(err => {
				console.log(err);
			});
	})
	.post((req, res) => {
		messageService.addMessage(req.body)
			.then(message => {
				console.log(message)
				if(message.text.indexOf("@bot") === 0 ) {
					// if (message.text)
					res.send(message)

				} else {
					console.log(message)
					res.send(message);
				}
			})
			.catch(err => {
				console.log(err);
			});
	});
	

message.route('/:id')
	.patch((req, res) => {
		messageService.updateMessage(req.params.id, req.body)
			.then(message => {
				res.send(message);
			})
			.catch(err => {
				console.log(err);
			});
	})
	.get((req, res) => {
		messageService.getMessageById(req.params.id)
			.then(message => {
				res.send(message);
			})
			.catch(err => {
				console.log(err);
			});
	})
	.delete((req, res) => {
		messageService.deleteMessage(req.params.id)
			.then(message => {
				res.send(message);
			})
			.catch(err => {
				console.log(err);
			});
	});

module.exports = message;
