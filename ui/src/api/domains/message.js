import api from '../adapter';

export default {
	fetchAllMessages: () => {
		return api.makeRequest('/api/messages', api.requestTypes.GET);
	},
	addMessage: message => {
		return api.makeRequest('/api/messages', api.requestTypes.POST, message);
	},
	updateMessage: message => {
		return api.makeRequest(`/api/messages/${message._id}`, api.requestTypes.PATCH, message);
	},
	deleteMessage: id => {
		return api.makeRequest(`/api/messages/${id}`, api.requestTypes.DELETE);
	},
	fetchMessage: id => {
		return api.makeRequest(`/api/messages/${id}`, api.requestTypes.GET);
	}
}