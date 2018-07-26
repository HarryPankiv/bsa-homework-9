import * as constants from './constants';

export const fetchAllMessages = () => ({
	type: constants.FETCH_ALL_MESSAGES
})

export const fetchMessage = id => ({
	type: constants.FETCH_MESSAGE,
	payload: {
		id
	}
})

export const addMessage = message => ({
	type: constants.ADD_MESSAGE,
	payload: message
})

export const updateMessage = message => ({
	type: constants.UPDATE_MESSAGE,
	payload: message
})

export const deleteMessage = id => ({
	type: constants.DELETE_MESSAGE,
	payload: {
		id
	}
})

export const setActiveMessage = id => ({
	type: constants.SET_ACTIVE_MESSAGE,
	payload: {
		id: id
	}
})