import * as constants from '../actions/constants';
import { combineReducers } from 'redux';

const initialState = {
	byId: {},
	all: [],
	isFetching: false,
	active: null
}

const byId = ( state = initialState.byId, action ) => {
	switch (action.type) {
		case constants.FETCH_ALL_MESSAGES_SUCCESS:
			return action.payload.byId;
		case constants.ADD_MESSAGE_SUCCESS:
			return {
				...state,
				[Object.values(action.payload)[0]._id]: Object.values(action.payload)[0],
				[Object.values(action.payload)[1]._id]: Object.values(action.payload)[1]
			}
		case constants.UPDATE_MESSAGE_SUCCESS:
		case constants.FETCH_MESSAGE_SUCCESS:
			return {
				...state,
				[action.payload._id]: action.payload
			}
		default :
			return state
	}
}

const all = ( state = initialState.all, action ) => {
	switch (action.type) {
		case constants.FETCH_ALL_MESSAGES_SUCCESS:
			return action.payload.all;
		case constants.DELETE_MESSAGE_SUCCESS:
			return state.filter(id => id !== action.payload.id)
		case constants.ADD_MESSAGE_SUCCESS:
			return [...state, Object.values(action.payload)[0]._id, Object.values(action.payload)[1]._id];
		default :
			return state
	}
}

const isFetching = ( state = initialState.isFetching, action ) => {
	switch (action.type) {
		case constants.FETCH_ALL_MESSAGES:
		case constants.FETCH_MESSAGE:
		case constants.ADD_MESSAGE:
		case constants.UPDATE_MESSAGE:
		case constants.DELETE_MESSAGE:
			return true;
		case constants.FETCH_ALL_MESSAGES_SUCCESS:
		case constants.FETCH_ALL_MESSAGES_FAILED:
		case constants.FETCH_MESSAGE_SUCCESS:
		case constants.FETCH_MESSAGE_FAILED:
		case constants.ADD_MESSAGE_SUCCESS:
		case constants.ADD_MESSAGE_FAILED:
		case constants.UPDATE_MESSAGE_SUCCESS:
		case constants.UPDATE_MESSAGE_FAILED:
		case constants.DELETE_MESSAGE_SUCCESS:
		case constants.DELETE_MESSAGE_FAILED:
			return false;
		default :
			return state
	}
}

const active = ( state = initialState.active, action ) => {
	switch (action.type) {
		case constants.FETCH_MESSAGE_SUCCESS:
			return action.payload._id;
		case constants.SET_ACTIVE_MESSAGE:
			return action.payload.id;
		case constants.FETCH_MESSAGE:
			return null;
		default :
			return state
	}
}

export default combineReducers({
	byId, 
	all, 
	isFetching, 
	active
})

export const allMessages = ({ messages }) => messages.all.map( id => messages.byId[id]);
export const isMessagesFetching = ({ messages }) => messages.isFetching;
export const activeMessage = ({ messages }) => messages.active ? messages.byId[messages.active] : null;
export const recipeById = id => ({ messages }) => messages.byId[id];