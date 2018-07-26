import { combineReducers } from 'redux';
import messagesReducer from '../reducers'

export default combineReducers({
	messages: messagesReducer
})