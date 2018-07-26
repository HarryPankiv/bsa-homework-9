import { fork, takeLatest, all, call, put } from "redux-saga/effects";
import { normalize } from 'normalizr';
// import { push } from 'connected-react-router';
import { arrayOfMessages } from '../sagas/MessagesSchema';
import * as constants from '../actions/constants';
import { messageAPI } from '../api';

function* fetchAllMessages() {
	try {
		const messages = yield call(messageAPI.fetchAllMessages);
		const normalizedData = normalize(messages.data, arrayOfMessages);

		yield put({
			type: constants.FETCH_ALL_MESSAGES_SUCCESS,
			payload: {
				all: normalizedData.result,
				byId: normalizedData.entities.byId || {}
			}
		})
	} catch (error) {
		yield put({
			type: constants.FETCH_ALL_MESSAGES_FAILED
		})
	}
}

function* addMessage(action) {
	try {
		const messageResponse = yield call(messageAPI.addMessage, action.payload);

		yield put({
			type: constants.ADD_MESSAGE_SUCCESS,
			payload: {
				...messageResponse.data
			}
		})

		// yield put(push('/messages'))
	} catch (error) {
		yield put({
			type: constants.ADD_MESSAGE_FAILED
		})
	}
} 

function* updateMessage(action) {
	try {
		yield call(messageAPI.updateMessage, action.payload);

		yield put({
			type: constants.UPDATE_MESSAGE_SUCCESS,
			payload: action.payload
		})

		// yield put(push('/messages'))
	} catch (error) {
		yield put({
			type: constants.UPDATE_MESSAGE_FAILED
		})
	}
} 

function* deleteMessage(action) {
	try {
		let response = yield call(messageAPI.deleteMessage, action.payload.id);
		yield call(messageAPI.deleteMessage, action.payload.id);

		yield put({
			type: constants.DELETE_MESSAGE_SUCCESS,
			payload: {
				id: action.payload.id
			}
		})
	} catch (error) {
		yield put({
			type: constants.DELETE_MESSAGE_FAILED
		})
	}
} 

function* fetchMessage(action) {
	try {
		const req = yield call(messageAPI.fetchMessage, action.payload.id);

		yield put({
			type: constants.FETCH_MESSAGE_SUCCESS,
			payload: {
				...req.data
			} 
				
		})
	} catch (error) {
		yield put({
			type: constants.FETCH_MESSAGE_FAILED
		})
	}
} 

function* messagesSaga() {
	yield all([
		takeLatest(constants.FETCH_ALL_MESSAGES, fetchAllMessages),
		takeLatest(constants.ADD_MESSAGE, addMessage),
		takeLatest(constants.UPDATE_MESSAGE, updateMessage),
		takeLatest(constants.DELETE_MESSAGE, deleteMessage),
		takeLatest(constants.FETCH_MESSAGE, fetchMessage)
	])
}


export default function* rootSaga() {
	yield all([
		fork(messagesSaga)
	])
}
